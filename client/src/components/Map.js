import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import L from 'leaflet'

const Map = () => {

  const position = [49.2827, -123.1207]

	const fires = useSelector((state) => state.fires)

  useEffect(() => {

    // let container = L.DomUtil.get('map');
		// if(container != null){
		// 	 container._leaflet_id = null;
		// 	 container.off()
		//   container.remove()
		// }

		let icon = L.icon({
	    iconUrl: 'my-icon.png',
	    iconSize: [38, 95],
	    iconAnchor: [22, 94],
	    popupAnchor: [-3, -76],
	    shadowUrl: 'my-icon-shadow.png',
	    shadowSize: [68, 95],
	    shadowAnchor: [22, 94]
		})

		//Create markers based on fire data
    let markers = fires.map((fire, key) => {
    	let { lat, lon } = fire
    	let marker = L.marker([lat, lon]);
    	return marker
    })

    //Create Tile layer made of markers
    markers = L.layerGroup(markers)

    //Initialize map
    let mapContainer = L.map('map', {
      center: [49.2827, -123.1207],
      zoom: 8,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
        markers
      ]
    })

    mapContainer.invalidateSize()

  },[fires])

	return(
		<>
			<div id='map'></div>
		</>
	)
}

export default Map
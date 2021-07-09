import { useSelector } from 'react-redux'
import { useEffect, useState, createRef } from 'react'
import L from 'leaflet'
import fireIcon from '../assets/images/fire.svg'

const Map = () => {

  const position = [49.2827, -123.1207]

	const fires = useSelector((state) => state.fires)

  let [map, setMap] = useState({})
  const mapRef = createRef()
  mapRef.current = map

  useEffect(() => {

    let tileLayerURI = `https://api.mapbox.com/styles/v1/gregslonina/ckqvh9jhh913a17nw1sgej609/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`
    mapRef.current = L.map('map', {
      center: [49.2827, -123.1207],
      zoom: 6,
      layers: [
        L.tileLayer(tileLayerURI, {
          attribution: '&copy; <a href="https://gregslonina.com">Greg Slonina</a>'
        })
      ]
    })
    setMap(mapRef.current)
    console.log(mapRef.current)
  },[])

  useEffect(() => {

    let container = L.DomUtil.get('map');
		if(container != null){
      //console.log(container)
			 //container._leaflet_id = null;
			 //container.off()
		  //container.remove()
		}

		let icon = L.icon({
	    iconUrl: fireIcon,
	    iconSize: [28, 28],
	    iconAnchor: [22, 94]
	    // popupAnchor: [-3, -76],
	    // shadowUrl: 'my-icon-shadow.png',
	    // shadowSize: [68, 95],
	    // shadowAnchor: [22, 94]
		})

		//Create markers based on fire data
    let markers = fires.map((fire, key) => {
    	let { lat, lon } = fire
    	let marker = L.marker([lat, lon], { icon: icon});
    	return marker
    })

    //Create layer group made of markers
    L.layerGroup(markers).addTo(mapRef.current)

    //Initialize map
    // let mapContainer = L.map('map', {
    //   center: [49.2827, -123.1207],
    //   zoom: 8,
    //   layers: [
    //     L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    //       attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //     }),
    //     markers
    //   ]
    // })
    //mapRef.current

  //   mapContainer.invalidateSize()

  },[fires])

	return(
		<>
			<div id='map'></div>
		</>
	)
}

export default Map
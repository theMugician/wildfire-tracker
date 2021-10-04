import { useSelector } from 'react-redux'
import { useEffect, useState, createRef } from 'react'
import L from 'leaflet'
import fireIconSrcOutOfControl from '../assets/images/fire--out-of-control.svg'
import fireIconSrcBeingHeld from '../assets/images/fire--being-held.svg'
import fireIconSrcUnderControl from '../assets/images/fire--under-control.svg'

const Map = () => {

	const fires = useSelector((state) => state.fires)

	let [map, setMap] = useState({})
	const mapRef = createRef()
	mapRef.current = map

	useEffect(() => {

		let tileLayerURI = `https://api.mapbox.com/styles/v1/gregslonina/ckqvh9jhh913a17nw1sgej609/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`
		mapRef.current = L.map('map', {
		center: [49.2827, -123.1207],
		zoom: 7,
		layers: [
			L.tileLayer(tileLayerURI, {
				attribution: '&copy; <a href="https://gregslonina.com">Greg Slonina</a>'
			})
		]
		})
		setMap(mapRef.current)
	},[])

	useEffect(() => {
		
		let fireIcon = L.Icon.extend({
			options: {		
				iconSize: [20, 20],
				iconAnchor: [10, 10]
			}
		})

		let fireIconOutOfControl = new fireIcon({iconUrl: fireIconSrcOutOfControl}),
			fireIconBeingHeld = new fireIcon({iconUrl: fireIconSrcBeingHeld}),
    		fireIconUnderControl = new fireIcon({iconUrl: fireIconSrcUnderControl})

		const getFireIcon = (status) => {
			switch (status) {
				case 'Out of Control':
					return fireIconOutOfControl
				  	break;
				case 'Being Held':
					return fireIconBeingHeld
					break;			
				case 'Under Control':
					return fireIconUnderControl
					break;
  				default:
					return fireIconOutOfControl
			  }
		}

		//Create markers based on fire data
		let markers = fires.map((fire, key) => {
			let { lat, lon, fireNo, discoveryDate, location, hectares, status  } = fire

			let marker = L.marker([lat, lon], { icon: getFireIcon(status)});
			marker.bindPopup(
				`<p class='popup__title'>${location}</p>
				<p>Discovery date: ${discoveryDate} </p>
				<p>Fire no: ${fireNo} </p>
				<p>Hectares: ${hectares} </p>
				<p>Status: ${status} </p>`).openPopup()
			return marker
		})

		//Create layer group made of markers
		L.layerGroup(markers).addTo(mapRef.current)
    
  	},[fires])

	return(
      	<div className='container mt-40 container--map'>
        	<div id='map'></div>
    	</div>
	)
}

export default Map
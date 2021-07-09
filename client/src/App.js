import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Map from './components/Map'

import { fetchFires } from './actions/fires'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFires())
  },[dispatch])
  
  useEffect(() => {
    // const googleMapScript = document.createElement('script');
    // googleMapScript.src=`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
    // googleMapScript.async = true;
    // window.document.body.appendChild(googleMapScript);
  },[])

  return (
    <div className="App">
      <Map></Map>
    </div>
  )
}

export default App

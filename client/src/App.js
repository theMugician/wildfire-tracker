import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Map from './components/Map'
import Header from './components/Header'
import Main from './components/Main'

import { fetchFires } from './actions/fires'

const App = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchFires())
	},[dispatch])

	return (
		<div className="App">
			<Header></Header>
			<Main></Main>
			{/* <Header></Header>
			<Map></Map> */}
		</div>
	)
}

export default App

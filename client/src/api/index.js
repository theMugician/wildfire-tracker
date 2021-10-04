import axios from 'axios'

const url = (window.location.href === 'http://localhost:3000/' ? 'http://localhost:8000/fires' : '/fires' )
//const url = '/fires'
//const url = 'http://localhost:8000/fires'

export const fetchFires = () => axios.get(url)
import axios from 'axios'

const url = 'http://localhost:8000/fires'

export const fetchFires = () => axios.get(url)
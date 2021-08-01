import axios from 'axios'

const url = '/fires'

export const fetchFires = () => axios.get(url)
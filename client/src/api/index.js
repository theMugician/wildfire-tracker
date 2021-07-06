import axios from 'axios'

const url = 'bc-fire-data.json'

export const fetchFires = () => axios.get(url)
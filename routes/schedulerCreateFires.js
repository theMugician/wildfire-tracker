import axios from 'axios'
import dotenv from 'dotenv'

const port = process.env.PORT || 'http://localhost:8000/'
const url = `${port}fires`
const token = process.env.JWT

axios.post({
    headers: { 
        Authorization: `Bearer ${token}`
    }
}).then(e => {
    console.log(e)
})

import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 8000
const url = `http://localhost:${port}/fires`
const token = process.env.JWT

axios.post(url, {}, {
    headers: { 
        Authorization: `Bearer ${token}`
    }
}).then(e => {
    console.log(e.data)
}).catch(function (error) {
    console.log(error.response)
})
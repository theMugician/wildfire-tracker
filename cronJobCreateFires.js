import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

const cronJobCreateFires = () => {
    const appUrl = `${process.env.APP_URL}fires`
    const token = process.env.JWT

    axios.post(appUrl, {}, {
        headers: { 
            Authorization: `Bearer ${token}`
        }
    }).then(e => {
        console.log(e.data)
    }).catch(function (error) {
        console.log(error.response)
    })
}

export default cronJobCreateFires
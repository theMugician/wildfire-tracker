import express from 'express'
import mongodb from 'mongodb'
import bodyParser from 'body-parser'
import scraper from './controllers/scraper.js' 

const app = express()



const PORT = 8000

app.use(
  express.urlencoded({
    extended: true
  })
)

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

scraper()
// Scraper => fireData
// Scraper.save(POST, fireData)
// GET fireData
// /api/fires
// axios.get()
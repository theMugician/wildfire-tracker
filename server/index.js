import express from 'express'
import mongodb from 'mongodb'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import scraper from './controllers/scraper.js' 
import firesRoutes from './routes/fires.js'
import { createFires } from './controllers/fires.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/fires', firesRoutes)

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 8000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log('Database connection failed'))


//scraper()
//createFires()
//scraper()
// Scraper => fireData
// Scraper.save(POST, fireData)
// GET fireData
// /api/fires
// axios.get()
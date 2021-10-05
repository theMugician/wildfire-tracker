import express from 'express'
import mongodb from 'mongodb'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import firesRoutes from './routes/fires.js'
import cron from 'node-cron'
import cronJobCreateFires from './cronJobCreateFires.js'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors({ exposedHeaders: 'auth-token' }))

app.use(express.static(path.join('build')))
app.use('/fires', firesRoutes)

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 8000

cron.schedule('0 1 * * *', function() {
	cronJobCreateFires()
})

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
	.catch((error) => console.log(`Database connection error: ${error}`))

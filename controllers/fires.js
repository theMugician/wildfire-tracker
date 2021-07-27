import ActiveFires from '../models/fires.js'
import scraper from './scraper.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

export const getFires = async (request, response) => {
	try {
		const currentActiveFires = await ActiveFires.find()
		response.status(200).json(currentActiveFires)
	} catch (error) {
		response.status(404).json({ message: error.mesage })
	}
}

export const createFires = async (request, response) => {
	try {
		// console.log(request.token)
		// console.log(process.env.SECRET_KEY)
		jwt.verify(request.token, process.env.SECRET_KEY)
		await ActiveFires.remove()
		const fireData = await scraper()
		const currentActiveFires = await ActiveFires.insertMany(fireData)
		response.status(201).json(currentActiveFires)
	} catch (error) {
		console.error(error)
		response.status(404).json({ message: error.mesage })
	}
}

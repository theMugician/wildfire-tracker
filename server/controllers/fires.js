import ActiveFires from '../models/fires.js'
import scraper from './scraper.js'

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
		const fireData = await scraper()
		const currentActiveFires = await ActiveFires.insertMany(fireData)
		response.status(201).json(currentActiveFires)
	} catch (error) {
		console.error(error)
		response.status(404).json({ message: error.mesage })
	}
}
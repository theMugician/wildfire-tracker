import ActiveFires from '../models/fires.js'
import scraper from './scraper.js'

export const getFires = async (request, response) => {
	// try {
	// 	console.log('Getting Fires bitch')
	// 	const postMessages = await ActiveFires.find()
	// 	response.status(200).json(ActiveFires)
	// } catch (error) {
	// 	response.status(404).json({ message: error.mesage })
	// }
	response.send('Response works')
}

export const createFires = async (request, response) => {
	
	//console.log('Fires: ', fireData)
	
	//response.send('Response works')

	try {
		const fireData = await scraper()
		//await console.log(fireData)
		const currentActiveFires = new ActiveFires({fires: fireData})
		await currentActiveFires.save()
		response.status(201).json(fireData)
	} catch (error) {
		response.status(404).json({ message: error.mesage })
	}
}

export const createNewFires = async (request, response) => {
	//const fireData = await scraper()
	console.log('Fires: ', fireData)
	
	//response.send('Response works')

	try {
		const response = await axios('/users.json')
		const currentActiveFires = new ActiveFires(fireData)
		await currentActiveFires.save()
		response.status(201).json(fireData)
	} catch (error) {
		response.status(404).json({ message: error.mesage })
	}
}

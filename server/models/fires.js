import mongoose from 'mongoose'

const firesSchema = mongoose.Schema({
	fires: Array,
	createdAt: {
		type: Date,
		default: new Date()
	}
})

const ActiveFires = mongoose.model('ActiveFires', firesSchema)

export default ActiveFires
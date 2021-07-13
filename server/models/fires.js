import mongoose from 'mongoose'

const firesSchema = mongoose.Schema({
  fireNo: String,
  lat: Number,
  lon: Number,
  location: String,
  discoveryDate: String,
  status: String,
  hectares: String
})

const ActiveFires = mongoose.model('ActiveFires', firesSchema)

export default ActiveFires
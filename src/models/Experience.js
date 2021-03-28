// External Dependancies
const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema({
  name: String,
  url: String
})

module.exports = mongoose.model('Experience', experienceSchema, 'experience')

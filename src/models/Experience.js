// External Dependancies
const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema({
  name: String,
  companyOrProjectURL: String,
  startDate: String,
  endDate: String,
  responsibilities: Array
})

module.exports = mongoose.model('Experience', experienceSchema, 'experience')

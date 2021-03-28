// External Dependancies
const mongoose = require('mongoose')

const portfolioSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageURL: String,
  gitURL: String
})

module.exports = mongoose.model('Portfolio', portfolioSchema, 'portfolio')

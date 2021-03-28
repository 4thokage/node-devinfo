// External Dependancies
const boom = require('boom')

// Get Data Models
const Portfolio = require('../models/Portfolio')

// Get all contacts
exports.getPortfolio = async (req, reply) => {
  try {
    const jobs = await Portfolio.find()
    return jobs
  } catch (err) {
    throw boom.boomify(err)
  }
}

// External Dependancies
const boom = require('boom')

// Get Data Models
const Experience = require('../models/Experience')

// Get all contacts
exports.getExperience = async (req, reply) => {
  try {
    const jobs = await Experience.find()
    return jobs
  } catch (err) {
    throw boom.boomify(err)
  }
}

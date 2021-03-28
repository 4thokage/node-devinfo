// Import our Controllers
const experienceController = require('../controllers/experienceController')
const portfolioController = require('../controllers/portfolioController')

// Import Swagger documentation
const docsExperience = require('./documentation/experienceApi')
const docsPortfolio = require('./documentation/portfolioApi')

const routes = [
  {
    method: 'GET',
    url: '/experience',
    handler: experienceController.getExperience,
    schema: docsExperience.addExperienceSchema
  },
  {
    method: 'GET',
    url: '/portfolio',
    handler: portfolioController.getPortfolio,
    schema: docsPortfolio.addPortfolioSchema
  }
]

module.exports = routes

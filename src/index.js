
const DB_URL = process.env.DB_URL || 'mongodb://localhost/devinfoDB';
const APP_PORT = process.env.PORT || 50100;

// Require the fastify framework and instantiate it
const fastify = require('fastify')({
  logger: false
})

// Require external modules
const mongoose = require('mongoose')

// Import Routes
const routes = require('./routes')

// Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Enasble cors
fastify.register(require('fastify-cors'), { 
  // put your options here
})

// Connect to DB
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

// Loop over each route
routes.forEach((route, index) => {
  fastify.route(route)
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(APP_PORT, '0.0.0.0')
    fastify.swagger()
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()


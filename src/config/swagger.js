exports.options = {
  routePrefix: '/swagger',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'devinfo',
      description: 'This is a simple server for returning developer information. Mainly used by the jose-rodrigues.info website',
      version: '1.0.0'
    },
    host: 'api.jose-rodrigues.info/v1/devinfo',
    schemes: ['https'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
}

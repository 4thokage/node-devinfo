exports.addPortfolioSchema = {
  description: 'Developer personal project info',
  tags: ['portfolio'],
  summary: 'Developer personal project info',
  response: {
    200: {
      description: 'Successful response',
      type: 'array',
      items: {
        properties: {
          name: { type: 'string' },
          description: { type: 'string' },
          imageURL: { type: 'string' },
          gitURL: { type: 'string' }
        }
      }
    }
  }
}

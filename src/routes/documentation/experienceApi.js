exports.addExperienceSchema = {
  description: 'Developer experience summary',
  tags: ['experience'],
  summary: 'Developer experience summary',
  response: {
    200: {
      description: 'Successful response',
      type: 'array',
      items: {
        properties: {
          name: { type: 'string' },
          companyOrProjectURL: { type: 'string' },
          responsibilities: { type: 'array', items: {type: 'string'} },
          startDate: { type: 'string', format: 'date' },
          endDate: { type: 'string', format: 'date' }
        }
      }
    }
  }
}

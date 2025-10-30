const { title } = require('faker/lib/locales/az');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'Developer'
  },
  servers: [
    {
      url: 'http://localhost:3000/',
      description: 'Server'
    }
  ]
};

const options = {
  swaggerDefinition,
  apis: [ '/.routes/*.js' ]
}

const swaggerSpec = swaggerJSDoc(options);

function setupSwagger(app) {
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
}

module.exports = setupSwagger;

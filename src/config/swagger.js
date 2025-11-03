const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  // en swagger.js
  info: {
    title: 'Products API',
    version: '1.0',
    description: `
      API para gestionar usuarios, productos, categorías y marcas.

      - Creada con Express
      - Documentada con Swagger
    `
  },
  servers: [
    {
      url: 'http://localhost:3000/',
    }
  ],
  tags: [
    { name: 'Products' },
    { name: 'Categories' },
    { name: 'Brands' },
    { name: 'Users' }
  ],
  components: {}
};

const options = {
  swaggerDefinition,
  apis: [ './src/routes/*.routes.js', './src/docs/swaggerComponents.js' ]
}

const swaggerSpec = swaggerJSDoc(options);

const swaggerUiOptions = {
  customSiteTitle: 'Swagger Products API',
  customfavIcon: '/static/favicon.png',
  customCss: `
      .swagger-ui .topbar {
        background-color: #333;
      }
      .swagger-ui .markdown code, .swagger-ui .renderedMarkdown code {
        color: #000;
      }
    `
};

function setupSwagger(app) {
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec, swaggerUiOptions));
}

module.exports = setupSwagger;

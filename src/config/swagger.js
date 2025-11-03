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
  ]
};

const options = {
  swaggerDefinition,
  apis: [ '../routes/products.routes.js' ]
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
  // customCssUrl: '/static/swagger-theme.css'
};

function setupSwagger(app) {
  // app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec, swaggerUiOptions));
}

module.exports = setupSwagger;

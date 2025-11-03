const express = require('express');
const routerAPI = require('./src/routes/routes')
const errorHandler = require('./src/middlewares/error.middleware')
const setupSwagger = require('./src/config/swagger')
const app = express();
const port = 3000;

app.use(express.json());
routerAPI(app);
setupSwagger(app);
app.use(errorHandler);

app.listen(port, console.log('Server on http://localhost:3000'));

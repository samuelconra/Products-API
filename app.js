const express = require('express');
const routerAPI = require('./routes/routes')
const { errorHandler, logErrors } = require('./middlewares/errorHandler')
const setupSwagger = require('./swagger')
const app = express();
const port = 3000;

app.use(express.json());
routerAPI(app);
setupSwagger(app);
app.use(logErrors);
app.use(errorHandler);

app.listen(port, console.log('Server on http://localhost:3000'));

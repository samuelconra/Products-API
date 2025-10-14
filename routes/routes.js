const usersRouter = require('./usersRouter');
const categoriesRouter = require('./categoriesRouter');
const brandsRouter = require('./brandsRouter');
const productsRouter = require('./productsRouter');

function routerAPI(app) {
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);
  app.use('/brands', brandsRouter);
  app.use('/products', productsRouter);
}

module.exports = routerAPI;

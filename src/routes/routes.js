const usersRouter = require('./users.routes');
const categoriesRouter = require('./categories.routes');
const brandsRouter = require('./brands.routes');
const productsRouter = require('./products.routes');

function routerAPI(app) {
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);
  app.use('/brands', brandsRouter);
  app.use('/products', productsRouter);
}

module.exports = routerAPI;

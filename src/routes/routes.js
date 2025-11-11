import usersRouter from './users.routes.js'
import categoriesRouter from './categories.routes.js'
import brandsRouter from './brands.routes.js'
import productsRouter from './products.routes.js'

function routerAPI(app) {
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);
  app.use('/brands', brandsRouter);
  app.use('/products', productsRouter);
}

export default routerAPI;

import express from 'express';
const router = express.Router();

import { handleAsync } from '../middlewares/error.middleware.js';
import controller from '../controllers/products.controller.js';

// get all products
router.get('/', handleAsync(controller.getProducts));

// get product by id
router.get('/:id', handleAsync(controller.getProductById));

// get products by category
router.get('/category/:categoryId', handleAsync(controller.getProductsByCategory));

// get products by brand
router.get('/brand/:brandId', handleAsync(controller.getProductsByBrand));

// create product
router.post('/', handleAsync(controller.createProduct));

// update product
router.patch('/:id', handleAsync(controller.updateProduct));

// delete product
router.delete('/:id', handleAsync(controller.deleteProduct));

export default router;

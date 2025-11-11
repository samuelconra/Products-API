import express from 'express';
const router = express.Router();

import controller from '../controllers/brands.controller.js';
import { handleAsync } from '../middlewares/error.middleware.js';

// get all brands
router.get('/', handleAsync(controller.getBrands));

// get brand by id
router.get('/:id', handleAsync(controller.getBrandById));

// create brand
router.post('/', handleAsync(controller.createBrand));

// patch brands
router.patch('/:id', handleAsync(controller.updateBrand));

// delete brand
router.delete('/:id', handleAsync(controller.deleteBrand));

export default router;

import express from 'express';
const router = express.Router();

import controller from '../controllers/categories.controller.js';
import { handleAsync } from '../middlewares/error.middleware.js';

// get all categories
router.get('/', handleAsync(controller.getCategories));

// get category by id
router.get('/:id', handleAsync(controller.getCategoryById));

// create category
router.post('/', handleAsync(controller.createCategory));

// update category
router.patch('/:id', handleAsync(controller.updateCategory));

// delete category
router.delete('/:id', handleAsync(controller.deleteCategory));

export default router;

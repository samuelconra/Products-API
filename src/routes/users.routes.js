import express from 'express';
const router = express.Router();

import controller from '../controllers/users.controller.js';
import { handleAsync } from '../middlewares/error.middleware.js';

// get all users
router.get('/', handleAsync(controller.getUsers));

// get user by id
router.get('/:id', handleAsync(controller.getUserById));

// create user
router.post('/', handleAsync(controller.createUser));

// update user
router.patch('/:id', handleAsync(controller.updateUser));

// delete user
router.delete('/:id', handleAsync(controller.deleteUser));

export default router;

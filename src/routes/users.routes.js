import express from 'express';
const router = express.Router();

import service from '../services/users.service.js'

// get all users
router.get('/', (req, res, next) => {
  try {
    const response = service.getAll();
    res.status(200).json(response);
  } catch (error) {
    next(error)
  }
});

// get user by id
router.get('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const response = service.getById(id);
    res.status(200).json(response);
  } catch (error) {
    next(error)
  }
});

// create user
router.post('/', (req, res, next) => {
  try {
    const data = req.body;
    const response = service.create(data);
    res.status(201).json(response);
  } catch (error) {
    next(error)
  }
})

// update user
router.patch('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const response = service.update(id, data);
    res.status(200).json(response);
  } catch (error) {
    next(error)
  }
});

// delete user
router.delete('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const response = service.delete(id);
    res.status(200).json(response);
  } catch (error) {
    next(error)
  }
})

export default router;

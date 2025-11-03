const express = require('express');
const router = express.Router();

const service = require('../services/categories.service')

// get all categories
router.get('/', (req, res, next) => {
  try {
    const response = service.getAll();
    res.status(200).json(response);
  } catch (error) {
    next(error)
  }
});

// get category by id
router.get('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const response = service.getById(id);
    res.status(200).json(response);
  } catch (error) {
    next(error)
  }
});

// create category
router.post('/', (req, res, next) => {
  try {
    const data = req.body;
    const response = service.create(data);
    res.status(201).json(response);
  } catch (error) {
    next(error)
  }
})

// update category
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

// delete category
router.delete('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const response = service.delete(id);
    res.status(200).json(response);
  } catch (error) {
    next(error)
  }
})

module.exports = router;

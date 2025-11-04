const express = require('express');
const router = express.Router();

const service = require('../services/products.service')

// get all products
router.get('/', (req, res, next) => {
  try {
    const response = service.getAll();
    res.status(200).json(response);
  } catch (error) {
    next(error)
  }
});

// get product by id
router.get('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const response = service.getById(id);
    res.status(200).json(response);
  } catch (error) {
    next(error)
  }
});

// get products by category
router.get('/category/:categoryId', (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const response = service.getByCategory(categoryId);
    res.status(200).json(response);
  } catch (error) {
    next(error)
  }
})

// get products by brand
router.get('/brand/:brandId', (req, res, next) => {
  try {
    const { brandId } = req.params;
    const response = service.getByBrand(brandId);
    res.status(200).json(response);
  } catch (error) {
    next(error)
  }
})

// create product
router.post('/', (req, res, next) => {
  try {
    const data = req.body;
    const response = service.create(data);
    res.status(201).json(response);
  } catch (error) {
    next(error)
  }
});

// update product
router.patch('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const response = service.update(id, data)
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
});

// delete product
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

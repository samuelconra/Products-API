const express = require('express');
const router = express.Router();

const service = require('../services/productsService')
/**
 * @swagger
 * /products:
 *  get:
 *    summary: products list
 *    responses:
 *      200:
 *        description: products list
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  name:
 *                     type: string
 *                  description:
 *                     type: string
 *                  price:
 *                     type: number
 *                  stock:
 *                     type: string
 *                  categoryId:
 *                     type: number
 *                  brandId:
 *                     type: number
 */


// get all products
router.get('/', (req, res) => {
  try {
    const response = service.getAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
});

// get product by id
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const response = service.getById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
});

// get products by category
router.get('/category/:categoryId', (req, res) => {
  try {
    const { categoryId } = req.params;
    const response = service.getByCategory(categoryId);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

// get products by brand
router.get('/brand/:brandId', (req, res) => {
  try {
    const { brandId } = req.params;
    const response = service.getByBrand(brandId);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

// create product
router.post('/', (req, res) => {
  try {
    const data = req.body;
    const response = service.create(data);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
});

// update product
router.patch('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const response = service.update(id, data)
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
});

// delete product
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const response = service.delete(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

module.exports = router;

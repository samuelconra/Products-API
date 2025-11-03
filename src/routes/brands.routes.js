const express = require('express');
const router = express.Router();

const service = require('../services/brands.service')

// get all brands
router.get('/', (req, res) => {
  try {
    const response = service.getAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
});

// get brand by id
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const response = service.getById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
});

// create brand
router.post('/', (req, res) => {
  try {
    const data = req.body;
    const response = service.create(data);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

// patch brands
router.patch('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const response = service.update(id, data);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
});

// delete brand
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

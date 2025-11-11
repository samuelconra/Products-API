// src/controllers/brands.controller.js
import BrandsService from "../services/brands.service.js";

export const getBrands = async (req, res, next) => {
  const brands = await BrandsService.getAll();
  res.status(200).json(brands);
};

export const getBrandById = async (req, res, next) => {
  const { id } = req.params;
  const brand = await BrandsService.getById(id);
  res.status(200).json(brand);
};

export const createBrand = async (req, res, next) => {
  const data = req.body;
  const newBrand = await BrandsService.create(data);
  res.status(201).json(newBrand);
};

export const updateBrand = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  const brand = await BrandsService.update(id, data);
  res.status(200).json(brand);
};

export const deleteBrand = async (req, res, next) => {
  const { id } = req.params;
  const brand = await BrandsService.delete(id);
  res.status(200).json(brand);
};

export default {
  getBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand
};

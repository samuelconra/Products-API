import CategoriesService from "../services/categories.service.js";

export const getCategories = async (req, res, next) => {
  const categories = await CategoriesService.getAll();
  res.status(200).json(categories);
};

export const getCategoryById = async (req, res, next) => {
  const { id } = req.params;
  const category = await CategoriesService.getById(id);
  res.status(200).json(category);
};

export const createCategory = async (req, res, next) => {
  const data = req.body;
  const newCategory = await CategoriesService.create(data);
  res.status(201).json(newCategory);
};

export const updateCategory = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  const category = await CategoriesService.update(id, data);
  res.status(200).json(category);
};

export const deleteCategory = async (req, res, next) => {
  const { id } = req.params;
  const category = await CategoriesService.delete(id);
  res.status(200).json(category);
};

export default {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};

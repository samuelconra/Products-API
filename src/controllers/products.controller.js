import ProductsService from "../services/products.service.js";

export const getProducts = async (req, res, next) => {
  const products = await ProductsService.getAll();
  res.status(200).json(products);
};

export const getProductById = async (req, res, next) => {
  const { id } = req.params;
  const product = await ProductsService.getById(id);
  res.status(200).json(product);
};

export const getProductsByCategory = async (req, res, next) => {
  const { categoryId } = req.params;
  const products = await ProductsService.getByCategory(categoryId);
  res.status(200).json(products);
};

export const getProductsByBrand = async (req, res, next) => {
  const { brandId } = req.params;
  const products = await ProductsService.getByBrand(brandId);
  res.status(200).json(products);
};

export const createProduct = async (req, res, next) => {
  const data = req.body;
  const newProduct = await ProductsService.create(data);
  res.status(201).json(newProduct);
};

export const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  const product = await ProductsService.update(id, data);
  res.status(200).json(product);
};

export const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  const product = await ProductsService.delete(id);
  res.status(200).json(product);
};

export default {
  getProducts,
  getProductById,
  getProductsByCategory,
  getProductsByBrand,
  createProduct,
  updateProduct,
  deleteProduct
};

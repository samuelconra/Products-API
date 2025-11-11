import AppError from '../utils/AppError.js';
import ProductModel from '../models/product.model.js';
import CategoriesService from './categories.service.js';
import BrandsService from './brands.service.js';

class ProductsService {
  // get all products
  static async getAll() {
    const products = await ProductModel.find().populate('categoryId').populate('brandId');
    return products;
  }

  // get product by id
  static async getById(id) {
    const product = await ProductModel.findById(id).populate('categoryId').populate('brandId');
    if (!product) throw new AppError('Product Not Found', 404);
    return product;
  }

  // get products by category id
  static async getByCategory(categoryId) {
    await CategoriesService.getById(categoryId);

    const products = await ProductModel.find({ categoryId: categoryId }).populate('categoryId').populate('brandId');
    if (products.length < 1) throw new AppError('No Products in this Category', 404);

    return products;
  }

  static async getByBrand(brandId) {
    await BrandsService.getById(brandId);

    const products = await ProductModel.find({ brandId: brandId }).populate('categoryId').populate('brandId');
    if (products.length < 1) throw new AppError('No Products in this Brand', 404);

    return products;
  }

  // create new product
  static async create(data) {
    if (!data.categoryName || !data.brandName) {
      throw new AppError('Missing category or brand', 400);
    }

    const category = await CategoriesService.getByName(data.categoryName);
    const brand = await BrandsService.getByName(data.brandName);

    const newProductData = {
      ...data,
      categoryId: category._id,
      brandId: brand._id,
    };

    delete newProductData.categoryName;
    delete newProductData.brandName;

    try {
      const newProduct = await ProductModel.create(newProductData);
      return newProduct;
    } catch (error) {
      throw new AppError(error.message, 400);
    }
  }

  // update category
  static async update(id, data) {
    const updateData = { ...data };

    if (updateData.categoryName) {
      const category = await CategoriesService.getByName(updateData.categoryName);
      updateData.categoryId = category._id;
      delete updateData.categoryName;
    }

    if (updateData.brandName) {
      const brand = await BrandsService.getByName(updateData.brandName);
      updateData.brandId = brand._id;
      delete updateData.brandName;
    }

    const product = await ProductModel.findByIdAndUpdate(id, updateData, { new: true });
    if (!product) throw new AppError('Product Not Found', 404);
    return product;
  }

  // delete category
  static async delete(id) {
    const product = await ProductModel.findByIdAndDelete(id);
    if (!product) throw new AppError('Product Not Found', 404);
    return product;
  }
}

export default ProductsService;

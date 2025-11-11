import AppError from '../utils/AppError.js';
import BrandModel from '../models/brand.model.js';
import ProductModel from '../models/product.model.js';

class BrandsService {
  // get all brands
  static async getAll() {
    const brands = await BrandModel.find();
    return brands;
  }

  // get brand by id
  static async getById(id) {
    const brand = await BrandModel.findById(id);
    if (!brand) throw new AppError('Brand Not Found', 404);
    return brand;
  }

  // create brand
  static async create(data) {
    try {
      const newBrand = await BrandModel.create(data);
      return newBrand;
    } catch (error) {
      throw new AppError(error.message, 400);
    }
  }

  // update brand
  static async update(id, data) {
    const brand = await BrandModel.findByIdAndUpdate(id, data, { new: true });
    if (!brand) throw new AppError('Brand Not Found', 404);
    return brand;
  }

  // delete brand
  static async delete(id) {
    const brand = await BrandModel.findById(id);
    if (!brand) throw new AppError('Brand Not Found', 404);

    const productInBrand = await ProductModel.findOne({ brandId: id });
    if (productInBrand) throw new AppError('Brand is in use', 409);

    await BrandModel.findByIdAndDelete(id);
    return brand;
  }

  // get by name
  static async getByName(name) {
    const brand = await BrandModel.findOne({ name: name });
    if (!brand) throw new AppError('Brand not found', 404);
    return brand;
  }
}

export default BrandsService;

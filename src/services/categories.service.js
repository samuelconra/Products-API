import AppError from '../utils/AppError.js';
import CategoryModel from '../models/category.model.js';
import ProductModel from '../models/product.model.js';

class CategoriesService {
  // get all categories
  static async getAll() {
    const categories = await CategoryModel.find();
    return categories;
  }

  // get category by id
  static async getById(id) {
    const category = await CategoryModel.findById(id);
    if (!category) throw new AppError('Category Not Found', 404);
    return category;
  }

  // create category
  static async create(data) {
    try {
      const newCategory = await CategoryModel.create(data);
      return newCategory;
    } catch (error) {
      throw new AppError(error.message, 400);
    }
  }

  // update category
  static async update(id, data) {
    const category = await CategoryModel.findByIdAndUpdate(id, data, { new: true });
    if (!category) throw new AppError('Category Not Found', 404);
    return category;
  }

  // delete category
  static async delete(id) {
    const category = await CategoryModel.findById(id);
    if (!category) throw new AppError('Category Not Found', 404);

    const productInCategory = await ProductModel.findOne({ categoryId: id });
    if (productInCategory) throw new AppError('Category is in use', 409);

    await CategoryModel.findByIdAndDelete(id);
    return category;
  }

  // get by name
  static async getByName(name) {
    const category = await CategoryModel.findOne({ name: name });
    if (!category) throw new AppError('Category not found', 404);
    return category;
  }
}

export default CategoriesService;

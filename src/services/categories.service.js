const AppError = require('../utils/AppError');
const { categories } = require('../data/data.mock');

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  // generate categories data
  generate() {
    this.categories = categories;
  }

  // get all categories
  getAll() {
    return this.categories;
  }

  // get category by id
  getById(id) {
    const category = this.categories.find(c => c.id == id);
    if (!category) throw new AppError('Category Not Found', 404);
    return category;
  }

  // create category
  create(data) {
    if (!data.name || !data.description || data.active == null) throw new AppError('Missing Fields', 400);

    const newCategory = {
      id: this.categories.at(-1).id + 1,
      ...data
    }
    this.categories.push(newCategory);

    return newCategory;
  }

  // update category
  update(id, data) {
    const index = this.categories.findIndex(i => i.id == id);
    if (index === -1) throw new AppError('Category Not Found', 404);
    const category = this.categories[index];

    if (data.active != null && typeof data.active !== 'boolean') throw new AppError('Active is not Boolean', 400)

    const dataKeys = Object.keys(data);
    const notPermitedKeys = dataKeys.filter(d => d != 'name' && d != 'description' && d != 'active')
    if (notPermitedKeys.length > 0) throw new AppError('Not Permited Parameters', 400)

    this.categories[index] = {
      ...category,
      ...data
    }

    return this.categories[index];
  }

  // delete category
  delete(id) {
    const category = this.categories.find(c => c.id == id);
    if (!category) throw new AppError('Category Not Found', 404);

    const productsService = require ('./products.service');
    const productsInCategory = productsService.getAll().find(p => p.categoryId == id);
    if (productsInCategory) throw new AppError('Category is in use', 409)

    this.categories = this.categories.filter(c => c.id != id);
    return category;
  }
}

module.exports = new CategoriesService();

const { categories } = require('../data/data.mock');
const productsService = require ('./products.service');

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
    if (this.categories.length < 1) throw new Error('No Categories Created');
    return this.categories;
  }

  // get category by id
  getById(id) {
    const category = this.categories.find(c => c.id == id);
    if (!category) throw new Error('Category Not Found');
    return category;
  }

  // create category
  create(data) {
    if (!data.name || !data.description || data.active == null) throw new Error('Missing Fields');

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
    if (index === -1) throw new Error('Category Not Found');
    const category = this.categories[index];

    if (data.active != null && typeof data.active !== 'boolean') throw new Error('Active is not Boolean')

    const dataKeys = Object.keys(data);
    const notPermitedKeys = dataKeys.filter(d => d != 'name' && d != 'description' && d != 'active')
    if (notPermitedKeys.length > 0) throw new Error('Not Permited Parameters')

    this.categories[index] = {
      ...category,
      ...data
    }

    return this.categories[index];
  }

  // delete category
  delete(id) {
    const category = this.categories.find(c => c.id == id);
    if (!category) throw new Error('Category Not Found');

    const productsInCategory = productsService.getAll().find(p => p.categoryId == id);
    if (productsInCategory) throw new Error('Category is in use')

    this.categories = this.categories.filter(c => c.id != id);
    return category;
  }
}

module.exports = new CategoriesService();

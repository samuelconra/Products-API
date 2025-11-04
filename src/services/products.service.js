const { fakerDE: faker } = require('@faker-js/faker');
const AppError = require('../utils/AppError');
const categoriesService = require('./categories.service');
const brandsService = require('./brands.service');
const { products } = require('../data/data.mock');

// PRODUCTS SERVICE CLASS
class ProductsService {
  constructor() {
      this.products = [];
      this.generate();
  }

  // generate products data
  generate() {
    this.products = products;
  }

  // get all products
  getAll() {
    return this.products;
  }

  // get product by id
  getById(id) {
    const product = this.products.find(p => p.id == id);
    if (!product) throw new AppError('Product Not Found', 404);
    return product;
  }

  // get products by category id
  getByCategory(categoryId) {
    const category = categoriesService.getAll().find(c => c.id == categoryId);
    if (!category) throw new AppError('Category Not Found', 404);

    const productsInCategory = this.products.filter(p => p.categoryId == category.id);
    if (productsInCategory.length < 1) throw new AppError('No Products in this Category', 404);

    return productsInCategory;
  }

  getByBrand(brandId) {
    const brand = brandsService.getAll().find(b => b.id == brandId);
    if (!brand) throw new AppError('No Brand Found', 404);

    const productsInBrand = this.products.filter(p => p.brandId == brand.id);
    if (productsInBrand.length < 1) throw new AppError('No Products in this Brand', 404);

    return productsInBrand;
  }

  // create new product
  create(data) {
    if (!data.name || !data.description || !data.price || !data.stock || !data.categoryId || !data.brandId || !data.image)
      throw new AppError('Missing Fields', 400);

    const category = categoriesService.getAll().find(c => c.id == data.categoryId);
    const brand = brandsService.getAll().find(b => b.id == data.brandId);

    if (!category) throw new AppError('Category Not Found', 404);
    if (!brand) throw new AppError('Brand Not Found', 404);

    const newProduct = { id: this.products.at(-1).id + 1, ...data }
    this.products.push(newProduct);

    return newProduct;
  }

  // update category
  update(id, data) {
    const index = this.products.findIndex(i => i.id == id);
    if (index === -1) throw new AppError('Product Not Found', 404);
    const product = this.products[index];

    if (data.categoryId != null) {
      const category = categoriesService.getAll().find(c => c.id == data.categoryId);
      if (!category) throw new AppError('Category Not Found', 404);
    }
    if (data.brandId != null) {
      const brand = brandsService.getAll().find(c => c.id == data.brandId);
      if (!brand) throw new AppError('Brand Not Found', 404);
    }

    this.products[index] = {
      ...product,
      ...data
    }

    return this.products[index];
  }

  // delete category
  delete(id) {
    const product = this.products.find(p => p.id == id);
    if (!product) throw new AppError('Product Not Found', 404);

    this.products = this.products.filter(p => p.id != id);
    return product;
  }
}

module.exports = new ProductsService();

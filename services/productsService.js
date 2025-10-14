const { fakerDE: faker } = require('@faker-js/faker');
const categoriesService = require('./categoriesService');
const brandsService = require('./brandsService');
const { products } = require('../mock/mockData');

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
    if (this.products.length < 1) throw new Error('No Products in Stock');
    return this.products;
  }

  // get product by id
  getById(id) {
    const product = this.products.find(p => p.id == id);
    if (!product) throw new Error('Product not found');
    return product;
  }

  // get products by category id
  getByCategory(categoryId) {
    const category = categoriesService.getAll().find(c => c.id == categoryId);
    if (!category) throw new Error('Category Not Found');

    const productsInCategory = this.products.filter(p => p.categoryId == category.id);
    if (productsInCategory.length < 1) throw new Error('No Products in this Category');

    return productsInCategory;
  }

  getByBrand(brandId) {
    const brand = brandsService.getAll().find(b => b.id == brandId);
    if (!brand) throw new Error('No Brand Found');

    const productsInBrand = this.products.filter(p => p.brandId == brand.id);
    if (productsInBrand.length < 1) throw new Error('No Products in this Brand');

    return productsInBrand;
  }

  // create new product
  create(data) {
    if (!data.name || !data.description || !data.price || !data.stock || !data.categoryId || !data.brandId)
      throw new Error('Missing Fields');

    const category = categoriesService.getAll().find(c => c.id == data.categoryId);
    const brand = brandsService.getAll().find(b => b.id == data.brandId);

    if (!category) throw new Error('Category Not Found');
    if (!brand) throw new Error('Brand Not Found');

    const newProduct = { id: faker.string.uuid(), ...data }
    this.products.push(newProduct);

    return newProduct;
  }

  // update category
  update(id, data) {
    const index = this.products.findIndex(i => i.id == id);
    if (index === -1) throw new Error('Product Not Found');
    const product = this.products[index];

    if (data.categoryId) {
      const category = categoriesService.getAll().find(c => c.id == data.categoryId);
      if (!category) throw new Error('Category Not Found');
    }
    if (data.brandId) {
      const brand = brandsService.getAll().find(c => c.id == data.brandId);
      if (!brand) throw new Error('Brand Not Found');
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
    if (!product) throw new Error('Product Not Found');

    this.products = this.products.filter(p => p.id != id);
    return product;
  }
}

module.exports = new ProductsService();

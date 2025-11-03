const AppError = require('../utils/AppError');
const { brands } = require('../data/data.mock');
const productsService = require('./products.service');

class BrandsService {
  constructor() {
    this.brands = [];
    this.generate();
  }

  generate() {
    this.brands = brands;
  }

  // get all brands
  getAll() {
    return this.brands;
  }

  // get brand by id
  getById(id) {
    const brand = this.brands.find(b => b.id == id);
    if (!brand) throw new AppError('Brand Not Found', 404);
    return brand;
  }

  // create brand
  create(data) {
    if (!data.name || !data.description || data.active == null) throw new AppError('Missing Fields', 400);

    const newBrand = {
      id: this.brands.at(-1).id + 1,
      ...data
    }
    this.brands.push(newBrand);

    return newBrand;
  }

  // update brand
  update(id, data) {
    const index = this.brands.findIndex(i => i.id == id);
    if (index === -1) throw new AppError('Brand Not Found', 404);
    const brand = this.brands[index];

    if (data.active != null && typeof data.active !== 'boolean') throw new AppError('Active is not boolean', 400)

    const dataKeys = Object.keys(data);
    const notPermitedKeys = dataKeys.filter(d => d != 'name' && d != 'description' && d != 'active')
    if (notPermitedKeys.length > 0) throw new AppError('Not Permited Parameters', 400)

    this.brands[index] = {
      ...brand,
      ...data
    }

    return this.brands[index];
  }

  // delete brand
  delete(id) {
    const brand = this.brands.find(c => c.id == id);
    if (!brand) throw new AppError('Brand Not Found', 404);

    const productsInBrand = productsService.getAll().find(p => p.brandId == id);
    if (productsInBrand) throw new AppError('Brand is in use', 409)

    this.brands = this.brands.filter(c => c.id != id);
    return brand;
  }
}

module.exports = new BrandsService();

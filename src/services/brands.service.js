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
    if (this.brands.length < 1) throw new Error('No Brands Created');
    return this.brands;
  }

  // get brand by id
  getById(id) {
    const brand = this.brands.find(b => b.id == id);
    if (!brand) throw new Error('Brand Not Found');
    return brand;
  }

  // create brand
  create(data) {
    if (!data.name || !data.description || data.active == null) throw new Error('Missing Fields');

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
    if (index === -1) throw new Error('Brand Not Found');
    const brand = this.brands[index];

    if (data.active != null && typeof data.active !== 'boolean') throw new Error('Active is not boolean')

    const dataKeys = Object.keys(data);
    const notPermitedKeys = dataKeys.filter(d => d != 'name' && d != 'description' && d != 'active')
    if (notPermitedKeys.length > 0) throw new Error('Not Permited Parameters')

    this.brands[index] = {
      ...brand,
      ...data
    }

    return this.brands[index];
  }

  // delete brand
  delete(id) {
    const brand = this.brands.find(c => c.id == id);
    if (!brand) throw new Error('Brand Not Found');

    const productsInBrand = productsService.getAll().find(p => p.brandId == id);
    if (productsInBrand) throw new Error('Brand is in use')

    this.brands = this.brands.filter(c => c.id != id);
    return brand;
  }
}

module.exports = new BrandsService();

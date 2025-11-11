// const { fakerDE: faker } = require('@faker-js/faker');
import { faker } from '@faker-js/faker';

// users creation
export const users = [];

for (let i = 0; i < 10; i++) {
  users.push({
    id: i + 1,
    name: faker.person.firstName(),
    username: faker.internet.username(),
    password: faker.internet.password()
  });
}

// categories, brands & products creation
export const categories = [];
export const brands = [];
export const products = [];

for (let i = 0; i < 20; i++) {
  const categories_number = 5;
  if (i < categories_number) {
    categories.push({
      id: i + 1,
      name: faker.commerce.department(),
      description: faker.commerce.productDescription(),
      active: faker.datatype.boolean()
    });

    brands.push({
      id: i + 1,
      name: faker.company.name(),
      description: faker.commerce.productDescription(),
      active: faker.datatype.boolean()
    });
  }

  products.push({
    id: i + 1,
    name: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    image: faker.image.avatar(),
    price: faker.commerce.price(),
    stock: Math.floor(Math.random() * 101),
    categoryId: Math.floor(Math.random() * (categories_number)) + 1,
    brandId: Math.floor(Math.random() * (categories_number)) + 1
  });
}

const entities = {
  users,
  categories,
  brands,
  products
}

export default entities;

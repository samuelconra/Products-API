const { fakerDE: faker } = require('@faker-js/faker');
const { users } = require('../data/data.mock');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  // generate data
  generate() {
    this.users = users;
  }

  // get all users
  getAll() {
    if (this.users.length < 1) throw new Error('No Users Created');
    return this.users;
  }

  // get product by id
  getById(id) {
    const user = this.users.find(u => u.id == id);
    if (!user) throw new Error('User not found');
    return user;
  }

  // create user
  create(data) {
    if (!data.name || !data.username || !data.password) throw new Error('Missing Fields');

    const newUser = {
      id: this.users.at(-1).id + 1,
      ...data
    }
    this.users.push(newUser);

    return newUser;
  }

  // update user
  update(id, data) {
    const index = this.users.findIndex(i => i.id == id);
    if (index === -1) throw new Error('User Not Found');
    const user = this.users[index];

    this.users[index] = {
      ...user,
      ...data
    }

    return this.users[index];
  }

  // delete user
  delete(id) {
    const user = this.users.find(u => u.id == id);
    if (!user) throw new Error('User Not Found');

    this.users = this.users.filter(c => c.id != id);
    return user;
  }
}

module.exports = new UsersService();

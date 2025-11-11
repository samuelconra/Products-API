import AppError from '../utils/AppError.js';
import User from '../models/user.model.js';

class UsersService {
  // get all users
  static async getAll() {
    const users = await User.find();
    return users;
  }

  // get product by id
  static async getById(id) {
    const user = await User.findById(id);
    if (!user) throw new AppError('User not found', 404);
    return user;
  }

  // create user
  static async create(data) {
    try {
      const newUser = await User.create(data);
      return newUser;
    } catch (error) {
      throw new AppError(error.message, 400);
    }
  }

  // update user
  static async update(id, data) {
    const user = await User.findByIdAndUpdate(id, data, { new: true });
    if (!user) throw new AppError('User Not Found', 404);
    return user;
  }

  // delete user
  static async delete(id) {
    const user = await User.findByIdAndDelete(id);
    if (!user) throw new AppError('User Not Found', 404);
    return user;
  }
}

export default UsersService;

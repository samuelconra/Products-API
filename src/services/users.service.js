import AppError from '../utils/AppError.js';
import UserModel from '../models/user.model.js';

class UsersService {
  // get all users
  static async getAll() {
    const users = await UserModel.find();
    return users;
  }

  // get product by id
  static async getById(id) {
    const user = await UserModel.findById(id);
    if (!user) throw new AppError('User not found', 404);
    return user;
  }

  // create user
  static async create(data) {
    try {
      const newUser = await UserModel.create(data);
      return newUser;
    } catch (error) {
      throw new AppError(error.message, 400);
    }
  }

  // update user
  static async update(id, data) {
    const user = await UserModel.findByIdAndUpdate(id, data, { new: true });
    if (!user) throw new AppError('User Not Found', 404);
    return user;
  }

  // delete user
  static async delete(id) {
    const user = await UserModel.findByIdAndDelete(id);
    if (!user) throw new AppError('User Not Found', 404);
    return user;
  }
}

export default UsersService;

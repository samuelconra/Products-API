import UsersService from "../services/users.service.js";

export const getUsers = async (req, res, next) => {
    const users = await UsersService.getAll();
    res.status(200).json(users);
};

export const getUserById = async (req, res, next) => {
  const { id } = req.params;
  const user = await UsersService.getById(id);
  res.status(200).json(user);
}

export const createUser = async (req, res, next) => {
  const data = req.body;
  const user = await UsersService.create(data);
  res.status(201).json(user);
}

export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  const user = await UsersService.update(id, data);
  res.status(200).json(user);
}

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await UsersService.delete(id);
  res.status(200).json(user);
}

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}

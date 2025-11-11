import UsersService from "../services/users.service.js";

export const getUsers = async (req, res, next) => {
    const users = await UsersService.getAll();
    res.status(200).json(users);
};

export const getUserById = async (req, res, next) => {
  const { id } = req.params;
  const response = await UsersService.getById(id);
  res.status(200).json(response);
}

export const createUser = async (req, res, next) => {
  const data = req.body;
  const response = await UsersService.create(data);
  res.status(201).json(response);
}

export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  const response = await UsersService.update(id, data);
  res.status(200).json(response);
}

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  const response = await UsersService.delete(id);
  res.status(200).json(response);
}

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}

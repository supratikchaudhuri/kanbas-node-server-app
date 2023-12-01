import model from "./model.js";

export const createUser = (user) => model.create(user);

export const findAllUsers = () => model.find();

export const findUserById = (userId) => model.findById(userId);

export const findUserByUsername = (username) =>
  model.findOne({ username: username });

export const findUserByCredentials = async (username, password) => {
  const userDetails = await model.findOne({ username, password });
  return userDetails;
};

export const updateUser = async (userId, updatedUser) => {
  const updtatedUser = await model.updateOne(
    { _id: userId },
    { $set: updatedUser }
  );
  return updtatedUser;
};

export const deleteUser = (userId) => model.deleteOne({ _id: userId });

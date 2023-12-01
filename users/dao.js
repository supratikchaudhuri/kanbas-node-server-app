import mongoose from "mongoose";
import model from "./model.js";

export const createUser = async (user) => {
  // generate mongodb id string
  user._id = new mongoose.Types.ObjectId().toHexString();
  const newUser = await model.create(user);
  return newUser;
};

export const findAllUsers = async () => {
  const users = await model.find();
  return users;
};

export const findUserById = async (userId) => {
  const user = await model.findById(userId);
  return user;
};

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

export const deleteUser = async (userId) => {
  const res = model.deleteOne({ _id: userId });
  return res;
};

import mongoose from "mongoose";
import model from "./model.js";

export const createUser = async (user) => {
  user._id = new mongoose.Types.ObjectId().toHexString();
  const newUser = await model.create(user);
  return newUser;
};

export const findAllUsers = async () => {
  const users = await model.find({});
  return users;
};

export const findUserById = async (userId) => {
  const user = await model.findById(userId);
  return user;
};

export const findUserByUsername = async (username) => {
  const user = await model.findOne({ username: username }).exec();
  return user;
};

export const findUserByCredentials = async (username, password) => {
  const userDetails = await model.findOne({
    username: username,
    password: password,
  });
  return userDetails;
};

export const updateUser = async (userId, updatedUser) => {
  try {
    const updtatedUser = await model.updateOne(
      { _id: userId },
      { $set: updatedUser }
    );
    return updtatedUser;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userId) => {
  const res = model.deleteOne({ _id: userId });
  return res;
};

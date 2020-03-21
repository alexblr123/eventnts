const User = require("../models/user.model");
const mongoose = require("mongoose");

exports.addUser = username => {
  return User({ ...username }).save();
};
exports.getUser = () => {
  return User.find().limit(10);
};
exports.deleteUser = id => {
  return User.deleteOne({ _id: id });
};

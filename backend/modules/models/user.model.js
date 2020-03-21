const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 300
    },
    password: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 300
    }
  },
  { collection: "users" }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

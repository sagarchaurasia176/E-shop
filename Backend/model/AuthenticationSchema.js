const mongoose = require("mongoose");
const Auths = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  confirmPassword: {
    type: String,
  },
  token: {
    type: String,
  },
  passwordExpire: {
    type: Date,
  },
});
module.exports = mongoose.model("AuthsSchema", Auths);

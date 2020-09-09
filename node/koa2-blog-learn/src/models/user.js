const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const db = require("../db/mongodb");

const userSchema = new Schema({
  username: String,
  password: String,
});

const userModel = db.model("User", userSchema, "users");

module.exports = userModel;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const db = require("../db/mongodb");

const blogListSchema = new Schema({
  title: String,
  kind: String,
  id: String,
  content: String,
  createTime: Number,
  clickCount: Number,
});

const blogListModel = db.model("blogList", blogListSchema, "blogList");

module.exports = blogListModel;

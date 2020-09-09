const mongoose = require("mongoose");
mongoose.connect("mongodb://59.110.238.48:27017/koa2-blog-learn", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongoose connection error"));
db.on("open", () => {
  console.error("mongoose connection success");
});

module.exports = db;

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", callback => {});

const loginSchema = new mongoose.Schema({
  username: String,
  password: String
});
let login = db.model("login", loginSchema, "login");
let user1 = new login({ username: "Lear", password: "test" });
user1.save(err => {
  if (err) return err;
});

let query = login.find({ username: "Lear" });
query.then(doc => console.log(doc));

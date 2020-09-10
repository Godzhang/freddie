const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const session = require("koa-session");
const user = require("./routes/user");
const blogList = require("./routes/blogList");

app.keys = ["some session keys"];

const CONFIG = {
  key: "loginStatus",
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: true,
};

app.use(session(CONFIG, app));
app.use(bodyParser());

app.use(user.routes(), user.allowedMethods());
app.use(blogList.routes(), blogList.allowedMethods());

app.listen(9000);

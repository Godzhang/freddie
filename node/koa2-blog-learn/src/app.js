const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const session = require("koa-session");
const user = require("./routes/user");
const blogList = require("./routes/blogList");
const CONFIG = require("./conf/session");

// app.keys = ["some session keys"];

app.use(session(CONFIG, app));
app.use(bodyParser());

app.use(user.routes(), user.allowedMethods());
app.use(blogList.routes(), blogList.allowedMethods());

app.listen(9000);

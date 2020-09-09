const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const user = require("./routes/user");
const blogList = require("./routes/blogList");

app.use(bodyParser());

app.use(user.routes(), user.allowedMethods());
app.use(blogList.routes(), blogList.allowedMethods());

app.listen(9000);

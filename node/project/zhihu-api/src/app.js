const Koa = require("koa");
const app = new Koa();

// 路由中间件
app.use(async (ctx, next) => {
  const method = ctx.method;
  const url = ctx.req.url;
  console.log(method);
  console.log(url);
  if (url === "/") {
  }

  next();
});

app.use(async (ctx) => {
  ctx.body = "hello zhihu";
});

app.listen(9000, () => {
  console.log("server is running at port 9000");
});

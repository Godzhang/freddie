const Koa = require("./like-koa");
const app = new Koa();

app.use(async (ctx, next) => {
  await next();
  console.log("logger");
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.req.method} -- ${ctx.req.url} -- ${ms}`);
});

app.use(async (ctx, next) => {
  ctx.res.end("this is like koa2");
});

app.listen(3000);

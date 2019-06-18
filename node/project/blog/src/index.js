// const Koa = require("koa");
// const app = new Koa();
// const serve = require("koa-static");

// app.use(serve(__dirname + "/static/html", { extensions: ["html"] }));

// app.use(async (ctx, next) => {
//   let tmr = null;
//   const timeout = 5000;
//   await Promise.race([
//     new Promise((resolve, reject) => {
//       tmr = setTimeout(() => {
//         let e = new Error("Request timeout");
//         e.status = 408;
//         reject(e);
//       }, timeout);
//     }),
//     new Promise((resolve, reject) => {
//       (async function() {
//         await next();
//         clearTimeout(tmr);
//         resolve();
//       });
//     })
//   ]);
// });
// app.listen(8001);

const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const router = require("koa-router");
const app = new Koa();
app.use(bodyParser());
app.use(router.routes());
router.get("/", async (ctx, next) => {
  ctx.response.body = ``;
});
router.post("/login", async (ctx, next) => {
  let { name = "", password = "" } = ctx.request.body;

  if (name === "Koa" && password === "12345") {
    ctx.body = "Success";
  } else {
    ctx.body = "Login error";
  }
});

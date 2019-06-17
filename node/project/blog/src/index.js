const Koa = require("koa");
const app = new Koa();
const serve = require("koa-static");

app.use(async (ctx, next) => {
  let tmr = null;
  const timeout = 5000;
  await Promise.race([
    new Promise((resolve, reject) => {
      tmr = setTimeout(() => {
        let e = new Error("Request timeout");
        e.status = 408;
        reject(e);
      }, timeout);
    }),
    new Promise((resolve, reject) => {
      (async function() {
        await next();
        clearTimeout(tmr);
        resolve();
      });
    })
  ]);
});
app.listen(8001);

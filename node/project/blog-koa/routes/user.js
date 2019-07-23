const router = require("koa-router")();

router.prefix("/api/user");

const { login } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");

router.post("/login", async (ctx, next) => {
  const { username, password } = ctx.request.body;
  const result = await login(username, password);

  if (result.username) {
    ctx.session.username = result.username;
    ctx.session.realname = result.realname;

    ctx.body = new SuccessModel();
    return;
  }
  ctx.body = new ErrorModel("登录失败");
});

// router.get("/login-test", (req, res, next) => {
//   if (req.session.username) {
//     res.json({
//       errno: 0,
//       msg: "chenggong"
//     });
//     return;
//   }
//   res.json({
//     errno: -1,
//     msg: "weidenglu"
//   });
// });

module.exports = router;

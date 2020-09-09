const router = require("koa-router")();
const userModel = require("../models/user");

router.prefix("/api/user");

router.post("/login", async (ctx, next) => {
  const username = ctx.request.body.username || "";
  const password = ctx.request.body.password || "";
  const result = await userModel.find({ username }, (err) => {
    if (err) {
      ctx.body = {
        code: 1,
        message: err.message,
      };
      return;
    }
  });
  if (result.length === 0) {
    ctx.body = {
      code: 1,
      message: "用户不存在",
    };
    return;
  }
  if (result[0].password !== password) {
    ctx.body = {
      code: 1,
      message: "密码错误",
    };
    return;
  }
  ctx.body = {
    code: 0,
    message: "登录成功",
  };
});

router.post("/register", async (ctx, next) => {
  const username = ctx.request.body.username || "";
  const password = ctx.request.body.password || "";
  // 检测用户名是否已存在
  const result = await userModel.find({ username }, (err) => {
    if (err) {
      ctx.body = {
        code: 1,
        message: err.message,
      };
      return;
    }
  });
  if (result.length > 0) {
    ctx.body = {
      code: 1,
      message: "用户名已存在",
    };
    return;
  }
  // 新建数据
  const user = new userModel({ username, password });
  await user.save((err) => {
    if (err) {
      ctx.body = {
        code: 1,
        message: err.message,
      };
      return;
    }
  });
  ctx.body = {
    code: 0,
    message: "注册成功",
  };
});

router.post("/check", async (ctx) => {
  const username = ctx.request.body.username || "";
  await userModel.find({ username }, (err, result) => {
    if (err) {
      ctx.body = {
        code: 1,
        message: err.message,
      };
      return;
    }
    ctx.body = {
      code: 0,
      isExist: result.length > 0,
    };
  });
});

module.exports = router;

const router = require("koa-router")();
const userModel = require("../models/user");
const { LOGIN_STATUS } = require("../conf/user");

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
  const date = new Date();
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000);

  ctx.cookies.set(LOGIN_STATUS, true, {
    httpOnly: false,
    expires: date,
    maxAge: 24 * 60 * 60 * 1000,
    signed: false,
  });

  ctx.session.loginStatus = true;

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

router.post("/exit", async (ctx) => {
  ctx.cookies.set(LOGIN_STATUS, false, {
    httpOnly: false,
    maxAge: 0,
  });
  ctx.body = {
    code: 0,
    message: "已退出登录",
  };
});

module.exports = router;

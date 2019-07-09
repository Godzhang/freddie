const handleUserRouter = (req, res) => {
  const { method, path } = req;

  // 登录
  if (method === "POST" && path === "/api/user/login") {
    return {
      msg: "登录接口"
    };
  }
};

module.exports = handleUserRouter;

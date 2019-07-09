const handleBlogRouter = (req, res) => {
  const { method, path } = req;

  // 获取博客列表
  if (method === "GET" && path === "/api/blog/list") {
    return {
      msg: "博客列表接口"
    };
  }
  // 获取博客详情
  if (method === "GET" && path === "/api/blog/detail") {
    return {
      msg: "博客详情接口"
    };
  }
  // 新建一篇博客
  if (method === "POST" && path === "/api/blog/new") {
    return {
      msg: "新建博客接口"
    };
  }
  // 更新一篇博客
  if (method === "POST" && path === "/api/blog/update") {
    return {
      msg: "更新博客接口"
    };
  }
  // 删除一篇博客
  if (method === "POST" && path === "/api/blog/del") {
    return {
      msg: "删除博客接口"
    };
  }
};

module.exports = handleBlogRouter;

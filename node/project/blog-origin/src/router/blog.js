const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

// 统一的登录验证函数
const loginCheck = req => {
  if (!req.session.username) {
    return Promise.resolve(new ErrorModel("尚未登录"));
  }
};

const handleBlogRouter = (req, res) => {
  const { method, path } = req;
  const { id = "" } = req.query;

  // 获取博客列表
  if (method === "GET" && path === "/api/blog/list") {
    let { author = "", keyword = "" } = req.query;

    if (req.query.isadmin) {
      // 管理员界面
      const loginCheckResult = loginCheck(req);
      if (loginCheckResult) {
        // 未登录
        return loginCheckResult;
      }
      // 强制查询自己的博客
      author = req.session.username;
    }

    return getList(author, keyword).then(listData => {
      return new SuccessModel(listData);
    });
  }
  // 获取博客详情
  if (method === "GET" && path === "/api/blog/detail") {
    return getDetail(id).then(detailData => {
      return new SuccessModel(detailData);
    });
  }
  // 新建一篇博客
  if (method === "POST" && path === "/api/blog/new") {
    const loginCheckResult = loginCheck(req);
    if (loginCheckResult) {
      // 未登录
      return loginCheckResult;
    }

    req.body.author = req.session.username;
    return newBlog(req.body).then(data => {
      return new SuccessModel(data);
    });
  }
  // 更新一篇博客
  if (method === "POST" && path === "/api/blog/update") {
    const loginCheckResult = loginCheck(req);
    if (loginCheckResult) {
      // 未登录
      return loginCheckResult;
    }

    return updateBlog(id, req.body).then(res => {
      if (res) {
        return new SuccessModel();
      } else {
        return new ErrorModel("更新失败");
      }
    });
  }
  // 删除一篇博客
  if (method === "POST" && path === "/api/blog/del") {
    const loginCheckResult = loginCheck(req);
    if (loginCheckResult) {
      // 未登录
      return loginCheckResult;
    }

    const author = req.session.username;
    return delBlog(id, author).then(res => {
      if (res) {
        return new SuccessModel();
      } else {
        return new ErrorModel("删除失败");
      }
    });
  }
};

module.exports = handleBlogRouter;

const express = require("express");
const router = express.Router();
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const loginCheck = require("../middleware/loginCheck");

router.get("/list", (req, res, next) => {
  let { author = "", keyword = "" } = req.query;

  if (req.query.isadmin) {
    // 管理员界面
    if (!req.session.username) {
      // 未登录
      res.json(new ErrorModel("未登录"));
      return;
    }
    // 强制查询自己的博客
    author = req.session.username;
  }

  return getList(author, keyword).then(listData => {
    res.json(new SuccessModel(listData));
  });
});

router.get("/detail", (req, res, next) => {
  const { id = "" } = req.query;
  return getDetail(id).then(detailData => {
    res.json(new SuccessModel(detailData));
  });
});

// 新建一篇博客
router.post("/new", loginCheck, (req, res, next) => {
  req.body.author = req.session.username;
  return newBlog(req.body).then(data => {
    res.json(new SuccessModel(data));
  });
});
// 更新一篇博客
router.post("/update", loginCheck, (req, res, next) => {
  const { id = "" } = req.query;
  return updateBlog(id, req.body).then(result => {
    if (result) {
      res.json(new SuccessModel());
    } else {
      res.json(new ErrorModel("更新失败"));
    }
  });
});

// 删除一篇博客
router.post("/del", loginCheck, (req, res, next) => {
  const { id = "" } = req.query;
  const author = req.session.username;
  return delBlog(id, author).then(result => {
    if (result) {
      res.json(new SuccessModel());
    } else {
      res.json(new ErrorModel("删除失败"));
    }
  });
});

module.exports = router;

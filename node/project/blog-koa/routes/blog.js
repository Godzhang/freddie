const router = require("koa-router")();

router.prefix("/api/blog");

router.get("/list", async (ctx, next) => {
  const query = ctx.query;
  ctx.body = {
    errno: 0,
    data: ["滑動if教師的"],
    query
  };
});
// const {
//   getList,
//   getDetail,
//   newBlog,
//   updateBlog,
//   delBlog
// } = require("../controller/blog");
// const { SuccessModel, ErrorModel } = require("../model/resModel");
// const loginCheck = require("../middleware/loginCheck");

// router.get("/list", (ctx, next) => {
//   let { author = "", keyword = "" } = ctx.query;

//   if (ctx.query.isadmin) {
//     // 管理员界面
//     if (!req.session.username) {
//       // 未登录
//       ctx.json(new ErrorModel("未登录"));
//       return;
//     }
//     // 强制查询自己的博客
//     author = req.session.username;
//   }

//   return getList(author, keyword).then(listData => {
//     ctx.json(new SuccessModel(listData));
//   });
// });

// router.get("/detail", (ctx, next) => {
//   const { id = "" } = ctx.query;
//   return getDetail(id).then(detailData => {
//     ctx.json(new SuccessModel(detailData));
//   });
// });

// // 新建一篇博客
// router.post("/new", loginCheck, (ctx, next) => {
//   req.body.author = ctx.session.username;
//   return newBlog(req.body).then(data => {
//     ctx.json(new SuccessModel(data));
//   });
// });
// // 更新一篇博客
// router.post("/update", loginCheck, (ctx, next) => {
//   const { id = "" } = ctx.query;
//   return updateBlog(id, ctx.body).then(result => {
//     if (result) {
//       ctx.json(new SuccessModel());
//     } else {
//       ctx.json(new ErrorModel("更新失败"));
//     }
//   });
// });

// // 删除一篇博客
// router.post("/del", loginCheck, (ctx, next) => {
//   const { id = "" } = ctx.query;
//   const author = ctx.session.username;
//   return delBlog(id, author).then(result => {
//     if (result) {
//       ctx.json(new SuccessModel());
//     } else {
//       ctx.json(new ErrorModel("删除失败"));
//     }
//   });
// });

module.exports = router;

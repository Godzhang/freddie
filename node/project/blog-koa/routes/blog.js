const router = require("koa-router")();

const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const loginCheck = require("../middleware/loginCheck");

router.prefix("/api/blog");

router.get("/list", async (ctx, next) => {
  let { author = "", keyword = "" } = ctx.query;

  if (ctx.query.isadmin) {
    // 管理员界面
    if (!ctx.session.username) {
      // 未登录
      ctx.body = new ErrorModel("未登录");
      return;
    }
    // 强制查询自己的博客
    author = ctx.session.username;
  }

  let listData = await getList(author, keyword);
  ctx.body = new SuccessModel(listData);
});

router.get("/detail", async (ctx, next) => {
  const { id = "" } = ctx.query;
  let detailData = await getDetail(id);
  ctx.body = new SuccessModel(detailData);
});

// 新建一篇博客
router.post("/new", loginCheck, async (ctx, next) => {
  ctx.request.body.author = ctx.session.username;
  let data = await newBlog(ctx.request.body);
  ctx.body = new SuccessModel(data);
});
// 更新一篇博客
router.post("/update", loginCheck, async (ctx, next) => {
  const { id = "" } = ctx.query;
  let result = await updateBlog(id, ctx.request.body);
  if (result) {
    ctx.body = new SuccessModel();
  } else {
    ctx.body = new ErrorModel("更新失败");
  }
});

// 删除一篇博客
router.post("/del", loginCheck, async (ctx, next) => {
  const { id = "" } = ctx.query;
  const author = ctx.session.username;
  let result = await delBlog(id, author);
  if (result) {
    ctx.body = new SuccessModel();
  } else {
    ctx.body = new ErrorModel("删除失败");
  }
});

module.exports = router;

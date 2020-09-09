const router = require("koa-router")();
const blogListModel = require("../models/blogList");

router.prefix("/api/blog");

const queryMaxID = async () => {
  let temp = 0;
  await blogListModel
    .find({})
    .sort({ id: -1 })
    .limit(1)
    .then((docs) => {
      if (docs.length > 0) {
        temp = docs[0].id;
      } else {
        console.log("collection is empty");
      }
    });
  return temp;
};

router.post("/new", async (ctx) => {
  const { title, kind, content } = ctx.request.body;
  const createTime = Date.now();
  let id = await queryMaxID();
  const blog = new blogListModel({
    title,
    id: ++id,
    createTime,
    kind,
    content,
  });
  await blog.save((err) => {
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
    message: "创建成功",
  };
});

router.get("/list", async (ctx) => {
  const query = {};
  const kind = ctx.query.kind || "";
  if (kind) query["kind"] = kind;
  const results = await blogListModel.find(query);
  const data = results.map(({ title, kind, createTime, id }) => ({
    title,
    kind,
    createTime,
    id,
  }));
  ctx.body = {
    code: 0,
    data,
  };
});

router.get("/detail", async (ctx) => {
  const id = ctx.query.id;
  const docs = await blogListModel.find({ id });
  if (docs.length > 0) {
    const { title, content, kind, createTime } = docs[0];
    ctx.body = {
      code: 0,
      message: "success",
      data: {
        title,
        content,
        kind,
        createTime,
      },
    };
  } else {
    ctx.body = {
      code: 1,
      message: "文章不存在",
    };
  }
});

router.post("/update", async (ctx) => {});

module.exports = router;

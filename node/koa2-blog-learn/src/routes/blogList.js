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
    clickCount: 0,
  });
  // for (let i = 2; i <= 32; i++) {
  //   const blog = new blogListModel({
  //     title: `title-${i}`,
  //     id: i,
  //     createTime: Date.now(),
  //     kind: "sport",
  //     content: `content-${i}`,
  //     clickCount: 0,
  //   });
  //   await blog.save();
  // }
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
  let { kind = "", pageSize, currentPage } = ctx.query;
  pageSize = Number(pageSize);
  currentPage = Number(currentPage);
  const query = {};
  if (kind) query["kind"] = kind;
  const results = await blogListModel.find(query, null, {
    limit: pageSize,
    skip: (currentPage - 1) * pageSize,
  });
  const data = results.map(({ title, kind, createTime, id, clickCount }) => ({
    title,
    kind,
    createTime,
    id,
    clickCount,
  }));
  const allArticles = await blogListModel.find({});
  ctx.body = {
    code: 0,
    data: {
      data,
      totalCount: allArticles.length,
    },
  };
});

router.get("/detail", async (ctx) => {
  const id = ctx.query.id;
  const docs = await blogListModel.find({ id });
  if (docs.length > 0) {
    let { title, content, kind, createTime, clickCount } = docs[0];
    await blogListModel
      .updateOne({ id }, { clickCount: ++clickCount })
      .catch(() => {
        ctx.body = {
          code: 1,
          message: "文章获取失败",
        };
      });
    ctx.body = {
      code: 0,
      message: "success",
      data: {
        title,
        content,
        kind,
        createTime,
        clickCount,
      },
    };
  } else {
    ctx.body = {
      code: 1,
      message: "文章不存在",
    };
  }
});

router.post("/update", async (ctx) => {
  const { id, title, kind, content } = ctx.request.body;
  await blogListModel.updateOne({ id }, { title, kind, content }, (err) => {
    if (err) {
      ctx.body = {
        code: 1,
        message: "修改失败",
      };
    }
  });
  ctx.body = {
    code: 0,
    message: "修改成功",
  };
});

router.post("/delete", async (ctx) => {
  const { id } = ctx.request.body;
  await blogListModel.deleteOne({ id }, (err) => {
    if (err) {
      ctx.body = {
        code: 1,
        message: err.message,
      };
    }
  });
  ctx.body = {
    code: 0,
    message: "删除成功",
  };
});

module.exports = router;

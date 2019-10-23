const http = require("http");
const koaStatic = require("koa-static");
const path = require("path");
const koaBody = require("koa-body");
const fs = require("fs");
const cors = require("koa2-cors");
const Koa = require("koa2");

const app = new Koa();
const port = process.env.PORT || "8100";

const uploadHost = `http://localhost:${port}/uploads/`;

function delDir(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(file => {
      let curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
  }
}

delDir(path.resolve(__dirname, "../uploads"));
// app.use(async (ctx, next) => {
//   delDir(path.resolve(__dirname, "../uploads"));
//   await next();
// });

app.use(
  cors({
    origin: function(ctx) {
      return "http://localhost:3000";
    }
  })
);

app.use(
  koaBody({
    formidable: {
      //设置文件的默认保存目录，不设置则保存在系统临时目录下
      uploadDir: path.resolve(__dirname, "../uploads")
    },
    multipart: true // 开启文件上传，默认是关闭
  })
);

// 开启静态文件访问
app.use(koaStatic(path.resolve(__dirname, "../")));

// 文件二次处理，修改名称
// app.use(ctx => {
//   if (!ctx.request.files) return;
//   let files = ctx.request.files.f1;
//   let result = [];

//   if (!Array.isArray(files)) files = [files];
//   files.forEach(file => {
//     const path = file.path;
//     const fname = file.name;
//     let nextPath = path + fname;
//     if (file.size > 0 && path) {
//       let extArr = fname.split(".");
//       let ext = [...extArr].pop();
//       nextPath = path + "." + ext;
//       fs.renameSync(path, nextPath);

//       result.push(
//         `${uploadHost}${nextPath.slice(nextPath.lastIndexOf("\\") + 1)}`
//       );
//     }
//   });

//   ctx.body = `${JSON.stringify(result)}`;
// });

// 大文件分片上传文件二次处理
app.use(async ctx => {
  if (!ctx.request.files) return;
  let body = ctx.request.body;
  let files = ctx.request.files ? ctx.request.files.f1 : [];
  let result = [];
  let fileToken = ctx.request.body.token;
  let fileIndex = ctx.request.body.index;

  if (!files) files = [];
  if (!Array.isArray(files)) files = [files];

  files.forEach(file => {
    const path = file.path;
    const fname = file.name;
    let nextPath =
      path.slice(0, path.lastIndexOf("\\") + 1) + fileIndex + "-" + fileToken;
    if (file.size > 0 && path) {
      fs.renameSync(path, nextPath);

      result.push(
        `${uploadHost}${nextPath.slice(nextPath.lastIndexOf("\\") + 1)}`
      );
    }
    ctx.body = `片段${fileIndex}传输完成`;
  });

  if (body.type === "merge") {
    let { filename, chunkCount } = body;
    let folder = path.resolve(__dirname, "../uploads") + "/";
    let writeStream = fs.createWriteStream(`${folder}${filename}`);

    let cIndex = 0;

    function fnMergeFile() {
      let fname = `${folder}${cIndex}-${fileToken}`;
      let readStream = fs.createReadStream(fname);
      readStream.pipe(
        writeStream,
        { end: false }
      );
      readStream.on("end", function() {
        fs.unlink(fname, err => {
          if (err) {
            throw err;
          }
        });
        if (cIndex < chunkCount - 1) {
          cIndex += 1;
          fnMergeFile();
        }
      });
    }
    fnMergeFile();
    ctx.body = "merge ok 200";
  }
});

const server = http.createServer(app.callback());
server.listen(port);
console.log("server is running at port " + port);

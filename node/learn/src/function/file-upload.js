const http = require("http");
const path = require("path");
const fs = require("fs");
const bufferSplit = require("../utils/bufferSplit");

const server = http.createServer(function (req, res) {
  if (req.method === "POST") {
    // 获取分隔符
    const boundary = `--${
      req.headers["content-type"].split("; ")[1].split("=")[1]
    }`;

    let arr = [];
    req.on("data", (chunk) => {
      arr.push(chunk);
    });
    req.on("end", () => {
      const buffer = Buffer.concat(arr);
      console.log(buffer.toString());
      // 用分隔符切分数据
      let result = bufferSplit(buffer, boundary);
      console.log(result.map((item) => item.toString()));
      // 删除头尾数据
      result.pop();
      result.shift();
      console.log(result.map((item) => item.toString()));
      // 将每一项的头尾\r\n删除
      result = result.map((item) => item.slice(2, item.length - 1));
      console.log(result.map((item) => item.toString()));
      // 将每一项数据中间的\r\n\r\n删除，得到最终结果
      result.forEach((item) => {
        // 数据中含有文件信息，保持为Buffer类型
        let [info, data] = bufferSplit(item, "\r\n\r\n");
        info = info.toString();
        // 如果是文件信息，将Buffer转为文件保存
        if (info.indexOf("\r\n") > -1) {
          let infoResult = info.split("\r\n")[0].split("; ");
          // 获取表单name字段
          let name = infoResult[1].split("=")[1];
          name = name.substring(1, name.length - 1);
          // 获取文件名
          let filename = infoResult[2].split("=")[1];
          filename = filename.substring(1, filename.length - 1);
          // 将文件存储到服务器
          fs.writeFile(
            path.resolve(__dirname, `../../storage/file/${filename}`),
            data,
            (err) => {
              if (err) {
                console.log(err);
                return;
              }
              console.log("文件上传成功");
            }
          );
        } else {
          // 如果是数据，直接获取字段名称和值
          let name = info.split("; ")[1].split("=")[1];
          name = name.substring(1, name.length - 1);
          const value = data.toString();
          console.log(name, value);
        }
      });
    });
  }

  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile(
    path.resolve(__dirname, "../../templates/file-upload.html"),
    (err, content) => {
      if (err) {
        console.error(err);
        return;
      }
      res.end(content);
    }
  );
});

server.listen(9000, () => {
  console.log("server is listening at port 9000");
});

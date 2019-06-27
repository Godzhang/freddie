const mysql = require("mysql");
const http = require("http");
const url = require("url");
const qs = require("querystring");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cr7zhang",
  database: "user"
});
connection.connect();

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Content-Type", "application/json");

    if (req.method === "POST") {
      console.log("\n【post】");
      let pathname = req.url;
      console.log(`\n接口为${pathname}`);
      // 接收传送过来的参数
      let tempResult = "";

      req.on("data", chunk => (tempResult += chunk));
      req.on("end", () => {
        let result = JSON.stringify(qs.parse(tempResult));
        console.log(`\n参数为 ${res}`);

        if (pathname === "/sendMessage") {
          console.log(`\n【提交留言信息】`);

          result = JSON.parse(result);

          let id = result.userid; // id
          let userName = result.username; // 用户名
          let messageText = result.message; // 留言内容
          let time = getNowFormatDate(); // 时间

          if (!messageText) {
            res.end("登录失败，留言内容为空！");
            return;
          } else if (messageText.length > 140) {
            res.end("登录失败，字数超过限制！");
            return;
          } else {
            let addSql =
              "INSERT INTO message(user_message, user_id, user_name, time) VALUES(?, ?, ?, ?)";
            let addSqlParams = [messageText, id, userName, time];

            connection.query(addSql, addSqlParams, (err1, res1) => {
              if (err1) {
                throw err1;
              } else {
                console.log("新增成功");
                res.write(
                  JSON.stringify({
                    code: "0",
                    message: "新增成功"
                  })
                );
                res.end();
              }
            });
          }
        } else if (pathname === "/login") {
          console.log(`\n【登录】`);

          result = JSON.parse(result);

          let { username, password } = result;

          if (!username) {
            // 用户名为空
            res.end("登录失败，用户名为空！");
            return;
          } else if (!password) {
            // 密码为空
            res.end("登录失败，密码为空！");
            return;
          } else if (username.length > 10) {
            res.end("登录失败，姓名过长！");
            return;
          } else if (password.length > 20) {
            res.end("登录失败，密码过长！");
            return;
          } else {
            let readSql = `SELECT * FROM user WHERE user_name = '${username}'`;

            connection.query(readSql, (err1, res1) => {
              if (err1) {
                throw err1;
              } else {
                if (!res1 || res1.length === 0) {
                  res.end("用户不存在");
                  return;
                } else {
                  console.log("用户存在");

                  let newRes = JSON.parse(JSON.stringify(res1));
                  console.log(newRes);

                  if (newRes[0].user_password === password) {
                    res.write(
                      JSON.stringify({
                        code: "0",
                        message: "登录成功",
                        data: {
                          id: newRes[0].id,
                          userName: newRes[0].user_name
                        }
                      })
                    );
                    res.end();
                  } else {
                    res.write(
                      JSON.stringify({
                        code: "1",
                        message: "密码错误！"
                      })
                    );
                    res.end();
                  }
                }
              }
            });
          }
        } else if (pathname === "/register") {
          console.log(`\n【注册】`);

          result = JSON.parse(result);
          let { username, password } = result;
          let time = getNowFormatDate();

          if (!username) {
            // 用户名为空
            res.end("注册失败，用户名为空。");
            return;
          } else if (!password) {
            // 密码为空
            res.end("注册失败，密码为空！");
            return;
          } else if (username.length > 10) {
            // 姓名过长
            res.end("注册失败，姓名过长！");
            return;
          } else if (password.length > 20) {
            // 密码过长
            res.end("注册失败，密码过长！");
            return;
          } else {
            // 查询user表
            new Promise((resolve, reject) => {
              let readSql = "SELECT * FROM user";
              connection.query(readSql, (err1, res1) => {
                if (err1) {
                  throw err1;
                } else {
                  console.log(`\n sql 查询结果: `);
                  let newRes = JSON.parse(JSON.stringify(res1));
                  console.log(newRes);

                  let usernameRepeat = false;
                  for (let i = 0, l = newRes.length; i < l; i++) {
                    if (newRes[i].user_name === username) {
                      usernameRepeat = true;
                      break;
                    }
                  }
                  if (usernameRepeat) {
                    res.end("注册失败，姓名重复！");
                    return;
                  } else if (newRes.length > 300) {
                    // 如果注册名额已满
                    res.end("注册失败，名额已满！");
                    return;
                  } else {
                    // 可以注册
                    resolve();
                  }
                }
              });
            }).then(() => {
              console.log("\n 第二步");

              let addSql =
                "INSERT INTO user(user_name, user_password, time) VALUES(?,?,?)";
              let addSqlParams = [username, password, time];

              connection.query(addSql, addSqlParams, (err2, res2) => {
                if (err2) {
                  throw err2;
                } else {
                  console.log(`注册增加结果: `);
                  console.log(res2);
                  console.log("\n 注册成功");

                  res.write(
                    JSON.stringify({
                      code: "0",
                      message: "注册成功"
                    })
                  );

                  res.end();
                }
              });
            });
          }
        }
      });
    } else if (req.method === "GET") {
      console.log(`\n【get请求】`);

      let pathname = url.parse(req.url).pathname;

      console.log(`\n接口为：${pathname}`);

      if (pathname === "/getMessage") {
        console.log(`\n【获取留言信息】`);

        // 解析 url 参数部分
        let params = url.parse(req.url, true).query;

        console.log("\n参数为：");
        console.log(params);

        let readSql = "SELECT * FROM message";

        connection.query(readSql, (err1, res1) => {
          if (err1) {
            throw err1;
          } else {
            let newRes = JSON.parse(JSON.stringify(res1));
            console.log(newRes);

            // 返回数据
            res.write(
              JSON.stringify({
                code: "1",
                message: "查询成功！",
                data: newRes
              })
            );

            // 结束响应
            res.end();
          }
        });
      } else if (pathname === "/") {
        res.writeHead(200, {
          "Content-Type": "text/html;charset=UTF-8"
        });
        res.write(
          '<h1 style="text-align:center">jsliang 前端有限公司服务已开启！</h1><h2 style="text-align:center">详情可见：<a href="https://github.com/LiangJunrong/document-library/blob/master/other-library/Node/NodeBase.md" target="_blank">Node 基础</a></h2>'
        );
        res.end();
      }
    }
  })
  .listen(8008);

function getNowFormatDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  if (month >= 1 && month <= 9) {
    month = `0${month}`;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = `0${strDate}`;
  }
  let currentDate = `${year}-${month}-${strDate} ${hour}:${minute}:${second}`;
  return currentDate;
}

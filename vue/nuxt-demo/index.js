const fs = require("fs");
const Vue = require("vue");
const server = require("express")();
const renderer = require("vue-server-renderer").createRenderer({
  template: fs.readFileSync("./index.html", "utf-8")
});

const context = {
  title: "nuxt-demo",
  meta: `<meta charset="utf-8">`
};

server.get("*", (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的URL是 {{url}}</div>`
  });
  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      throw err;
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.end(html);
  });
});

server.listen(8000);

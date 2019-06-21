const fs = require("fs");
const request = require("request");
const express = require("express");
const cheerio = require("cheerio");
const Nightmare = require("nightmare");
const nightmare = Nightmare();

const urls = [];
const crawlerUrl = "https://pixabay.com/zh/images/search/";
let page = 1;
for (let i = page; i <= 30; i++) {
  let url = i === 1 ? crawlerUrl : `${crawlerUrl}?pagi=${i}`;
  urls.push(url);
}

let images = [];
let imagesPath = `./src/images/`;

if (!fs.existsSync(imagesPath)) {
  fs.mkdirSync(imagesPath);
}

async function start() {
  for (let i = 0, l = urls.length; i < l; i++) {
    await getImages(urls[i]);
    console.log(`第${page}页图片已抓取完成`);
    page++;
  }
}

start();

async function getImages(url) {
  await nightmare
    .goto(url)
    .evaluate(() => document.querySelector("div.search_results").innerHTML)
    // .end()
    .then(htmlStr => {
      handleHtml(htmlStr);
    })
    .catch(err => console.log(err));
}

function handleHtml(htmlStr) {
  let res = [];
  let $ = cheerio.load(htmlStr);

  $(".item").each((i, item) => {
    let src =
      $(item)
        .find("img")
        .attr("data-lazy") ||
      $(item)
        .find("img")
        .attr("src");
    if (!src.endsWith(".gif")) {
      res.push(src);
    }
  });
  downloadUrl(res);
}

function downloadUrl(list) {
  let p = `${imagesPath}${page}/`;
  if (!fs.existsSync(p)) {
    fs.mkdirSync(p);
  }
  list.forEach(item => {
    let ss = item.split("/");
    let name = ss[ss.length - 1];
    let path = `${p}${name}`;
    if (!fs.existsSync(path)) {
      let writeIn = fs.createWriteStream(path);
      writeIn.on("error", err => console.log(err));
      request(item).pipe(writeIn);
      writeIn.on("error", err => console.log(err));
    }
  });
}

// const app = express();
// app.listen(8001);
// app.get("/", (req, res) => {
//   fs.readFile("./src/index.html", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.setHeader("Content-Type", "text/html;charset=`utf-8`");
//       res.end(data);
//     }
//   });
// });
// app.get("/images", (req, res) => {
//   res.send({
//     code: 0,
//     data: images
//   });
// });

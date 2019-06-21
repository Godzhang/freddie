const express = require("express");
const superagent = require("superagent");
const cheerio = require("cheerio");
const Nightmare = require("nightmare");
const nightmare = Nightmare();

const app = express();

let hotNews = [];
let localNews = [];

let server = app.listen(8001, () => {
  console.log(`server is running at port 8001`);
});

app.get("/", (req, res) => {
  res.send({
    hotNews,
    localNews
  });
});

nightmare
  .goto("http://news.baidu.com/")
  .wait("ul#localnews-focus li")
  .evaluate(() => document.querySelector("div#local_news").innerHTML)
  .then(htmlStr => {
    localNews = getLocalNews(htmlStr);
  })
  .catch(err => {
    console.log(error);
  });

superagent.get("http://news.baidu.com/").end((err, res) => {
  if (err) {
    console.log(err);
  } else {
    hotNews = getHotNews(res);
  }
});

function getHotNews(res) {
  let hotNews = [];
  let $ = cheerio.load(res.text);
  $("div#pane-news ul li a").each((i, el) => {
    hotNews.push({
      title: $(el).text(),
      href: $(el).attr("href")
    });
  });
  return hotNews;
}
function getLocalNews(htmlStr) {
  let localNews = [];
  let $ = cheerio.load(htmlStr);
  $("ul#localnews-focus li a").each((i, el) => {
    localNews.push({
      title: $(el).text(),
      href: $(el).attr("href")
    });
  });
  $("div#localnews-zixun ul li a").each((i, el) => {
    localNews.push({
      title: $(el).text(),
      href: $(el).attr("href")
    });
  });
  return localNews;
}

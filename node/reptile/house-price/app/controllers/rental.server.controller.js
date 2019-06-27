const https = require("https");
const cheerio = require("cheerio");
const cfg = require("../../config/config");

// url存储对象
let rentalObj = (() => {
  // 保存58同城列表页上爬取的每个租房的url
  let rentalSet = new Set();

  // 增加URL后的回调函数
  let callbackFunc = function() {};

  return {
    add(data) {
      if (data.indexOf("hz.58.com") < 0) return;
      rentalSet.add(data);
      callbackFunc && callbackFunc(data);
    },
    register(func) {
      callbackFunc = func;
    },
    unRegister() {
      callbackFunc = function() {};
    }
  };
})();

// url读取解析对象
let rentalInfosObj = (() => {
  // 二手房解析出来的数据存储在map中
  let rentalInfosMap = new Map();

  // 管道数组，将得到的url亚茹，有定时器按时读取访问解析
  let szUrlPipe = [];

  let iNum = 0;

  (function func() {
    iNum++;

    // 反爬虫策略：1-10s随机访问，每8次休息一次，休息时间为3-9分钟随机
    if (iNum > 8) {
      setTimeout(func, 10000 * (Math.random() + 1));
      if (iNum === 40) {
        iNum = 0;
      }
    } else {
      if (szUrlPipe.length) {
        analysis(szUrlPipe.shift());
      }
      setTimeout(func, 10000 * Math.random());
    }
  })();

  // 根据url访问并解析返回值
  function analysis(url) {
    let html = "";

    https.get(url, res => {
      res.on("data", chunk => (html += chunk));
      res.on("end", () => {
        let $ = cheerio.load(html);
        try {
          $("a.c_333") &&
            $("a.c_333")[0] &&
            rentalInfosMap.set(url, {
              tel: $("span.house-chat-txt").text(),
              price: $(".house-pay-way b").text(),
              location: $("a.c_333")[0].text(),
              img: $("#smainPic")[0].attribs.src
            });
          console.log(`get ${Array.from(rentalInfosMap).length} rental infos`);
        } catch (e) {
          console.log(`get rental infos or rentalInfosMap set error`);
        }
      });
    });
  }

  return {
    push(url) {
      szUrlPipe.push(url);
    },
    getRentalInfos() {
      let params = {};
      for (let [k, v] of rentalInfosMap) {
        params[k] = v;
      }
      return params;
    }
  };
})();

function getUrl(page = 1) {
  return `https://bj.58.com/chuzu/pn${page}/?PGTID=0d3090a7-0000-1740-2384-2880e1324aee&ClickID=2`;
}

// 更新房租信息
function updateRentalUrl() {
  for (let page = 0; page <= cfg.page; page++) {
    let html = "";
    https.get(getUrl(page), res => {
      res.on("data", chunk => {
        html += chunk.toString();
      });
      res.on("end", () => {
        let $ = cheerio.load(html);
        let titles = $("div.des h2 a");
        console.log(html);
        for (let i = 0, l = titles.length; i < l; i++) {
          rentalObj.add(titles[i].attribs.href);
        }
      });
    });
  }
}

// 根据URL获取租房信息
function getRentalInfosByUrl(url) {
  rentalInfosObj.push(url);
}

module.exports = {
  init() {
    updateRentalUrl();
    rentalObj.register(getRentalInfosByUrl);
  },
  getRentalInfos(req, res, next) {
    let params = rentalInfosObj.getRentalInfos();
    console.log("params", params);
    res.json({
      result: true,
      params
    });
  }
};

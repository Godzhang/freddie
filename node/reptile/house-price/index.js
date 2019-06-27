const https = require("https");
const requst = require("request");

const url = `https://bj.58.com/chuzu/pn2/?PGTID=0d3090a7-0000-1740-2384-2880e1324aee&ClickID=2`;

requst(url, (err, res, body) => {
  if (!err && res.statusCode === 200) {
    console.log(body);
  } else {
    console.log(`get page error url => ${url}`);
  }
});

const path = require("path");
const fs = require("fs");
const babel = require("@babel/core");

fs.readFile(
  path.resolve(__dirname, "./src/es6.js"),
  "utf-8",
  (err, content) => {
    if (err) {
      console.error(err);
    } else {
      babel.transform(content, {}, (err, result) => {
        console.log(result.code);
      });
    }
  }
);

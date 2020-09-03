const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");
const parser = require("@babel/parser");

const resolve = (dir) => path.resolve(__dirname, dir);

fs.readFile(resolve("./es6.js"), "utf-8", (err, content) => {
  if (err) {
    console.error(err);
  } else {
    const result = babel.transform(content, {
      plugins: ["@babel/plugin-transform-arrow-functions"],
      // presets: [
      //   [
      //     "@babel/env",
      //     {
      //       targets: {
      //         edge: "17",
      //         firefox: "60",
      //         chrome: "67",
      //         safari: "11.1",
      //       },
      //       corejs: "3",
      //       useBuiltIns: "usage",
      //     },
      //   ],
      // ],
    });
    console.log(result);
    const parsedAst = babel.parse(content, {
      parserOpts: { allowAwaitOutsideFunction: true },
    });
    console.log(parsedAst);
    babel.transformFromAst(parsedAst, content, {}, (err, result) => {
      console.log(result);
    });
  }
});

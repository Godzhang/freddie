const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  mode: "development",
  entry: resolve("./src/es6.js"),
  output: {
    path: resolve("./src/"),
    filename: "es5.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
};

const autoprefixer = require("autoprefixer");
const stylelint = require("stylelint");
const postcssCssnext = require("postcss-cssnext");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    // autoprefixer({
    //   grid: true
    // }),
    stylelint({
      config: {
        rules: {
          "declaration-no-important": true
        }
      }
    }),
    // 转换css变量有问题
    postcssPresetEnv({
      autoprefixer: { grid: true }
    })
    // postcssCssnext({})
  ]
};

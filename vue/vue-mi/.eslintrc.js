/*
 * @Author: 张奇
 * @Date: 2019-10-04 11:14:45
 * @LastEditors: 张奇
 * @LastEditTime: 2019-10-05 15:25:51
 * @Description: file content
 */
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:vue/essential"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    "no-console": "off"
  }
};

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    quotes: [2, "double"],
    "func-names": 0,
    "space-before-function-paren": 0,
    "arrow-parens": 0,
    "no-console": 0,
    "no-undef": 0
  }
};

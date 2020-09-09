const path = require("path");
const fs = require("fs");
const parser = require("@babel/parser");
const generate = require("@babel/generator").default;

const code = `const name = 'tree🌲'`;

const ast = parser.parse(code);
console.log(ast);
const targetCode = generate(ast);
console.log(targetCode);

/**
 * @fileoverview setTimeout 第二个参数禁止是数字
 * @author freddie
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/settimeout-no-number"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 7,
  },
});
ruleTester.run("settimeout-no-number", rule, {
  valid: [
    {
      code: `let someNumber = 1000; setTimeout(() => { console.log(11) }, someNumber)`,
    },
    {
      code: `let someNumber = 1000; setTimeout(() => { console.log(11) }, someNumber)`,
    },
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "setTimeout(() => { console.log(11) }, 1000)",
      errors: [
        {
          message: "setTimeout第二个参数禁止是数字",
          type: "CallExpression",
        },
      ],
    },
  ],
});

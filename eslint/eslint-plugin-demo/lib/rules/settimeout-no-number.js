/**
 * @fileoverview setTimeout 第二个参数禁止是数字
 * @author freddie
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "setTimeout 第二个参数禁止是数字",
    },
    fixable: null, // or "code" or "whitespace"
  },

  create: function (context) {
    return {
      CallExpression: (node) => {
        if (node.callee.name !== "setTimeout") return;
        debugger;
        const timeNode = node.arguments && node.arguments[1];
        if (!timeNode) return;
        if (timeNode.type === "Literal" && typeof timeNode.value === "number") {
          context.report({
            node,
            message: "setTimeout第二个参数禁止是数字",
          });
        }
      },
    };
  },
};

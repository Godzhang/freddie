import generateParenthesis from "../../code/recursion/generateParenthesis";

test("generateParenthesis", () => {
  expect(generateParenthesis(3)).toEqual([
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
  ]);
});

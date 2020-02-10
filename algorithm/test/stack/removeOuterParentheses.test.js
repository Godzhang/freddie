import removeOuterParentheses from "../../code/stack/removeOuterParentheses";

test("removeOuterParentheses", () => {
  expect(removeOuterParentheses("(()())(())")).toBe("()()()");
  expect(removeOuterParentheses("(()())(())(()(()))")).toBe("()()()()(())");
  expect(removeOuterParentheses("()()")).toBe("");
});

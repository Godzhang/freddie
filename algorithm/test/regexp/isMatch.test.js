import isMatch from "../../code/regexp/isMatch";

test("isMatch", () => {
  expect(isMatch("aa", "a")).toBe(false);
  expect(isMatch("aa", "a*")).toBe(true);
  expect(isMatch("ab", ".*")).toBe(true);
  expect(isMatch("aab", "c*a*b")).toBe(true);
  expect(isMatch("mississippi", "mis*is*p*.")).toBe(false);
});

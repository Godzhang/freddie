import lengthOfLastWord from "../../code/string/lengthOfLastWord";

test("lengthOfLastWord", () => {
  expect(lengthOfLastWord("a")).toBe(1);
  expect(lengthOfLastWord("zhangqi")).toBe(7);
  expect(lengthOfLastWord("Hello World")).toBe(5);
  expect(lengthOfLastWord("a b c")).toBe(1);
});

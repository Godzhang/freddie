import repeatedSubstringPattern from "../../code/regexp/repeatedSubstringPattern";

test("repeatedSubstringPattern", () => {
  expect(repeatedSubstringPattern("abcabc")).toBe(true);
  expect(repeatedSubstringPattern("aaaaaaaaaaaaaaaa")).toBe(true);
  expect(repeatedSubstringPattern("abcab")).toBe(false);
  expect(repeatedSubstringPattern("abcabcabcabcabcabc")).toBe(true);
});

import isSubsequence from "../../code/greed/isSubsequence";

test("isSubsequence", () => {
  expect(isSubsequence("abc", "ahbgdc")).toBe(true);
  expect(isSubsequence("aec", "ahbgdc")).toBe(false);
  expect(
    isSubsequence(
      "leeeeetcode",
      "yyyyylyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyeyyyyyyeyyyyyyyyyyeyyyyyyyyyyyyyyyyyyyyyeyyytyyyyycyyyyyoyyyyyyyydyyyyyyyeyyyyy"
    )
  ).toBe(true);
});

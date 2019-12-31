import countSubstrings from "../../code/string/countSubstrings";

test("countSubstrings", () => {
  expect(countSubstrings("abc")).toBe(3);
  expect(countSubstrings("aaa")).toBe(6);
  expect(countSubstrings("fdsklf")).toBe(6);
});

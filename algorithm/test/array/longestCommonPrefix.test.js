import longestCommonPrefix from "../../code/array/longestCommonPrefix";

test("longestCommonPrefix", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  expect(longestCommonPrefix([])).toBe("");
});

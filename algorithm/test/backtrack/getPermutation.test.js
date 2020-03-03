import getPermutation from "../../code/backtrack/getPermutation";

test("getPermutation", () => {
  expect(getPermutation(3, 3)).toBe("213");
  expect(getPermutation(4, 9)).toBe("2314");
});

import uniquePaths from "../../code/dp/uniquePaths";

test("uniquePaths", () => {
  expect(uniquePaths(3, 2)).toBe(3);
  expect(uniquePaths(7, 3)).toBe(28);
});

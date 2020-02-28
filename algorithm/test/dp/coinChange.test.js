import coinChange from "../../code/dp/coinChange";

test("coinChange", () => {
  expect(coinChange([1, 5, 10, 25], 36)).toBe(3);
  expect(coinChange([1, 9, 10], 18)).toBe(2);
  expect(coinChange([5, 10], 18)).toBe(-1);
});

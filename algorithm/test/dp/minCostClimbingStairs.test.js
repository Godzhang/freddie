import minCostClimbingStairs from "../../code/dp/minCostClimbingStairs";

test("minCostClimbingStairs", () => {
  expect(minCostClimbingStairs([0, 2, 2, 1])).toBe(2);
  expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
  expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
});

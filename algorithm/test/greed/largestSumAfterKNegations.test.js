import largestSumAfterKNegations from "../../code/greed/largestSumAfterKNegations";

test("largestSumAfterKNegations", () => {
  expect(largestSumAfterKNegations([4, 2, 3], 1)).toBe(5);
  expect(largestSumAfterKNegations([3, -1, 0, 2], 3)).toBe(6);
  expect(largestSumAfterKNegations([2, -3, -1, 5, -4], 2)).toBe(13);
  expect(largestSumAfterKNegations([-2, 9, 9, 8, 4], 5)).toBe(32);
  expect(largestSumAfterKNegations([1, 3, 2, 6, 7, 9], 3)).toBe(26);
  expect(largestSumAfterKNegations([-8, 3, -5, -3, -5, -2], 6)).toBe(22);
});

import largestPerimeter from "../../code/sort/largestPerimeter";

test("largestPerimeter", () => {
  expect(largestPerimeter([2, 1, 2])).toBe(5);
  expect(largestPerimeter([1, 2, 1])).toBe(0);
  expect(largestPerimeter([3, 2, 3, 4])).toBe(10);
  expect(largestPerimeter([3, 6, 2, 3])).toBe(8);
});

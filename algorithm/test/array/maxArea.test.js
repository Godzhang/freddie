import maxArea from "../../code/array/maxArea";

test("maxArea", () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  expect(maxArea([2, 8, 3, 7, 9, 7, 6, 4, 3])).toBe(30);
});

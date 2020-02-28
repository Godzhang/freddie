import NumArray from "../../code/dp/NumArray";

test("NumArray", () => {
  let sumRange = new NumArray([-2, 0, 3, -5, 2, -1]);
  expect(sumRange.sumRange(0, 2)).toBe(1);
  expect(sumRange.sumRange(2, 5)).toBe(-1);
  expect(sumRange.sumRange(0, 5)).toBe(-3);
});

import hIndex from "../../code/sort/hIndex";

test("hIndex", () => {
  expect(hIndex([3, 0, 6, 1, 5])).toBe(3);
  expect(hIndex([100])).toBe(1);
  expect(hIndex([1, 2])).toBe(1);
  expect(hIndex([1, 2, 0])).toBe(1);
});

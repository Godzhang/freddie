import quickSort from "../../code/sort/quickSort";

test("quickSort", () => {
  expect(quickSort([4, 1, 5, 2, 3])).toEqual([1, 2, 3, 4, 5]);
  expect(quickSort([21, 6, 4, 10, 7, 1, 5, 3, 11, 9, 8])).toEqual([
    1,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    21
  ]);
});

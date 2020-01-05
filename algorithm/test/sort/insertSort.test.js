import insertSort from "../../code/sort/insertSort";

test("insertSort", () => {
  expect(insertSort([4, 1, 5, 2, 3])).toEqual([1, 2, 3, 4, 5]);
  expect(insertSort([2, 1, 4, 3, 6, 5, 8, 7])).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ]);
});

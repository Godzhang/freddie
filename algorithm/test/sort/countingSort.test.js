import countingSort from "../../code/sort/countingSort";

test("countingSort", () => {
  expect(countingSort([1, 2, 3, 4, 5, 6, 9, 8, 7])).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ]);
});

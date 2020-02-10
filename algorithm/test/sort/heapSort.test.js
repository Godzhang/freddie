import heapSort from "../../code/sort/heapSort";

test("heapSort", () => {
  expect(heapSort([3, 4, 2, 1, 5, 6, 9, 8, 7])).toEqual([
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

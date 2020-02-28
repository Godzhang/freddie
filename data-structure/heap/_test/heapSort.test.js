const heapSort = require("../heapSort.js");

test("heapSort", () => {
  expect(heapSort([6, 3, 4, 1, 2, 5, 9, 8, 7])).toEqual([
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

import radixSort from "../../code/sort/radixSort";

test("radixSort", () => {
  expect(radixSort([3, 4, 2, 100, 1, 35, 6, 9, 8, 7])).toEqual([
    1,
    2,
    3,
    4,
    6,
    7,
    8,
    9,
    35,
    100
  ]);
});

import bucketSort from "../../code/sort/bucketSort";

test("bucketSort", () => {
  expect(bucketSort([3, 4, 2, 1, 5, 6, 9, 8, 7], 2)).toEqual([
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

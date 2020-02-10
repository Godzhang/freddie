import cocktailSort from "../../code/sort/cocktailSort";

test("cocktailSort", () => {
  expect(cocktailSort([1, 4, 3, 2, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(cocktailSort([21, 6, 4, 10, 7, 1, 5, 3, 11, 9, 8])).toEqual([
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

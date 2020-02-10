import diagonalSort from "../../code/sort/diagonalSort";

test("diagonalSort", () => {
  expect(
    diagonalSort([
      [3, 3, 1, 1],
      [2, 2, 1, 2],
      [1, 1, 1, 2]
    ])
  ).toEqual([
    [1, 1, 1, 1],
    [1, 2, 2, 2],
    [1, 2, 3, 3]
  ]);
});

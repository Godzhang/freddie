import allCellsDistOrder from "../../code/sort/allCellsDistOrder";

test("allCellsDistOrder", () => {
  expect(allCellsDistOrder(1, 2, 0, 0)).toEqual([
    [0, 0],
    [0, 1]
  ]);
  expect(allCellsDistOrder(2, 2, 0, 1)).toEqual([
    [0, 1],
    [0, 0],
    [1, 1],
    [1, 0]
  ]);
  expect(allCellsDistOrder(2, 3, 1, 2)).toEqual([
    [1, 2],
    [0, 2],
    [1, 1],
    [0, 1],
    [1, 0],
    [0, 0]
  ]);
});

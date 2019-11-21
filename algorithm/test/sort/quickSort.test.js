import quickSort from "../../code/sort/quickSort";

test("quickSort", () => {
  expect(quickSort([4, 1, 5, 2, 3])).toEqual([1, 2, 3, 4, 5]);
});

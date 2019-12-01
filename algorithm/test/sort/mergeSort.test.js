import mergeSort from "../../code/sort/mergeSort";

test("mergeSort", () => {
  expect(mergeSort([4, 1, 5, 2, 3])).toEqual([1, 2, 3, 4, 5]);
  expect(mergeSort([2, 1, 4, 3, 6, 5, 8, 7])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

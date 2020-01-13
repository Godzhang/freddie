import deleteDuplicates from "../../code/chain/deleteDuplicates-82.js";

test("deleteDuplicates", () => {
  expect(deleteDuplicates([1, 2, 3, 3, 4, 4, 5])).toEqual([1, 2, 5]);
  expect(deleteDuplicates([1, 1, 1, 2, 3])).toEqual([2, 3]);
  expect(deleteDuplicates([1, 1, 2, 3, 3, 5, 5])).toEqual([2]);
});

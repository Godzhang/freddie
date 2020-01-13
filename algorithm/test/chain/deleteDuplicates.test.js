import deleteDuplicates from "../../code/chain/deleteDuplicates";

test("deleteDuplicates", () => {
  expect(deleteDuplicates([1, 1, 2])).toEqual([1, 2]);
  expect(deleteDuplicates([1, 1, 2, 3, 3])).toEqual([1, 2, 3]);
});

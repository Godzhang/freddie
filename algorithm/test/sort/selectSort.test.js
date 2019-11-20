import selectSort from "../../code/sort/selectSort";

test("selectSort", () => {
  expect(selectSort([1, 4, 3, 2, 5])).toEqual([1, 2, 3, 4, 5]);
});

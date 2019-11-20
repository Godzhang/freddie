import bubbleSort from "../../code/sort/bubbleSort";

test("bubbleSort", () => {
  expect(bubbleSort([1, 4, 3, 2, 5])).toEqual([1, 2, 3, 4, 5]);
});

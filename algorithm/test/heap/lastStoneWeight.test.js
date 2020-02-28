import lastStoneWeight from "../../code/heap/lastStoneWeight";

test("lastStoneWeight", () => {
  expect(lastStoneWeight([1, 4, 3, 5, 2, 5])).toBe(0);
  expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1);
});

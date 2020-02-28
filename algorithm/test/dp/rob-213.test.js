import rob from "../../code/dp/rob-213";

test("rob", () => {
  expect(rob([2, 3, 2])).toBe(3);
  expect(rob([1, 2, 3, 1])).toBe(4);
  expect(rob([3, 1, 2, 5, 4])).toBe(8);
});

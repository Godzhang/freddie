import intersection from "../../code/sort/intersection";

test("intersection", () => {
  expect(intersection([1, 2, 2, 1], [2, 2]).join()).toBe("2");
  expect(intersection([4, 9, 5], [9, 4, 9, 8, 4]).join()).toMatch(/4,9|9,4/);
});

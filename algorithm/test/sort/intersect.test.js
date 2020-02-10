import intersect from "../../code/sort/intersect";

test("intersect", () => {
  expect(intersect([1, 2, 2, 1], [2, 2]).join()).toBe("2,2");
  expect(intersect([4, 9, 5], [9, 4, 9, 8, 4]).join()).toMatch(/4,9|9,4/);
});

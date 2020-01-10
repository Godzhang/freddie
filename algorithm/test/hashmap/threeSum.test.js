import threeSum from "../../code/hashmap/threeSum";

test("threeSum", () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, 0, 1],
    [-1, -1, 2]
  ]);
});

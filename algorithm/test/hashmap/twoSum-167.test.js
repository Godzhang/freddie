import twoSum from "../../code/hashmap/twoSum-167";

test("twoSum", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
  expect(twoSum([0, 0], 1)).toEqual([]);
  expect(twoSum([5, 25, 75], 100)).toEqual([2, 3]);
});

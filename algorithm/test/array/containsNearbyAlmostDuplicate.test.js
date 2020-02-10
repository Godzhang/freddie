import containsNearbyAlmostDuplicate from "../../code/array/containsNearbyAlmostDuplicate";

test("containsNearbyAlmostDuplicate", () => {
  expect(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)).toBeTruthy();
  expect(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2)).toBeTruthy();
  expect(containsNearbyAlmostDuplicate([1, 2, 3, 1, 2, 3], 2, 3)).toBeFalsy();
});

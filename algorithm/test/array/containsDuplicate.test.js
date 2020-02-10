import containsDuplicate from "../../code/array/containsDuplicate";

test("containsDuplicate", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy();
  expect(containsDuplicate([1, 2, 3, 4])).toBeFalsy();
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy();
});

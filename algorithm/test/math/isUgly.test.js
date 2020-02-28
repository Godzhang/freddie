import isUgly from "../../code/math/isUgly";

test("isUgly", () => {
  expect(isUgly(6)).toBeTruthy();
  expect(isUgly(8)).toBeTruthy();
  expect(isUgly(14)).toBeFalsy();
});

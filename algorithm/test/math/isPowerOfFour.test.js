import isPowerOfFour from "../../code/math/isPowerOfFour";

test("isPowerOfFour", () => {
  expect(isPowerOfFour(0)).toBe(false);
  expect(isPowerOfFour(1)).toBe(true);
  expect(isPowerOfFour(2)).toBe(false);
  expect(isPowerOfFour(5)).toBe(false);
  expect(isPowerOfFour(16)).toBe(true);
  expect(isPowerOfFour(17)).toBe(false);
});

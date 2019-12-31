import isPowerOfThree from "../../code/math/isPowerOfThree";

test("isPowerOfThree", () => {
  expect(isPowerOfThree(0)).toBe(false);
  expect(isPowerOfThree(1)).toBe(true);
  expect(isPowerOfThree(9)).toBe(true);
  expect(isPowerOfThree(27)).toBe(true);
  expect(isPowerOfThree(45)).toBe(false);
});

import isPowerOfTwo from "../../code/math/isPowerOfTwo";

test("isPowerOfTwo", () => {
  expect(isPowerOfTwo(0)).toBe(false);
  expect(isPowerOfTwo(1)).toBe(true);
  expect(isPowerOfTwo(2)).toBe(true);
  expect(isPowerOfTwo(3)).toBe(false);
  expect(isPowerOfTwo(4)).toBe(true);
  expect(isPowerOfTwo(8)).toBe(true);
  expect(isPowerOfTwo(218)).toBe(false);
});

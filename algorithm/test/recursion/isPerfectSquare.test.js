import isPerfectSquare from "../../code/recursion/isPerfectSquare";

test("isPerfectSquare", () => {
  expect(isPerfectSquare(1)).toBe(true);
  expect(isPerfectSquare(14)).toBe(false);
  expect(isPerfectSquare(16)).toBe(true);
  expect(isPerfectSquare(49)).toBe(true);
  expect(isPerfectSquare(100)).toBe(true);
  expect(isPerfectSquare(2147395600)).toBe(true);
});

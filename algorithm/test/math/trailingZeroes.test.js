import trailingZeroes from "../../code/math/trailingZeroes";

test("trailingZeroes", () => {
  expect(trailingZeroes(3)).toBe(0);
  expect(trailingZeroes(5)).toBe(1);
  expect(trailingZeroes(10)).toBe(2);
  expect(trailingZeroes(25)).toBe(6);
  expect(trailingZeroes(30)).toBe(7);
});

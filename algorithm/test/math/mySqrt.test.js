import mySqrt from "../../code/math/mySqrt";

test("mySqrt", () => {
  expect(mySqrt(0)).toBe(0);
  expect(mySqrt(2)).toBe(1);
  expect(mySqrt(4)).toBe(2);
  expect(mySqrt(6)).toBe(2);
  expect(mySqrt(8)).toBe(2);
  expect(mySqrt(10)).toBe(3);
});

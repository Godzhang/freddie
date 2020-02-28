import nthUglyNumber from "../../code/heap/nthUglyNumber";

test("nthUglyNumber", () => {
  expect(nthUglyNumber(10)).toBe(12);
  expect(nthUglyNumber(9)).toBe(10);
  expect(nthUglyNumber(14)).toBe(20);
});

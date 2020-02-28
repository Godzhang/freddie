import brokenCalc from "../../code/greed/brokenCalc";

test("brokenCalc", () => {
  expect(brokenCalc(2, 3)).toBe(2);
  expect(brokenCalc(5, 8)).toBe(2);
  expect(brokenCalc(3, 10)).toBe(3);
  expect(brokenCalc(4, 10)).toBe(4);
  expect(brokenCalc(6, 10)).toBe(2);
  expect(brokenCalc(1024, 1)).toBe(1023);
  expect(brokenCalc(1, 1000000000)).toBe(39);
});

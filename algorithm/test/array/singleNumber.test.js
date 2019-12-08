import singleNumber from "../../code/array/singleNumber";

test("singleNumber", () => {
  expect(singleNumber([2, 2, 3, 2])).toBe(3);
  expect(singleNumber([0, 1, 0, 1, 0, 1, 99])).toBe(99);
});

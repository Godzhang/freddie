import { binarySearch } from "../../helper/array/utils";

test("binarySearch", () => {
  expect(binarySearch([1, 2, 3], 2)).toBe(1);
  expect(binarySearch([1, 2, 3], 4)).toBe(-1);
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).toBe(6);
});

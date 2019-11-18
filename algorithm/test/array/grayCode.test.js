import grayCode from "../../code/array/grayCode";

test("grayCode", () => {
  expect(grayCode(2)).toEqual([0, 1, 3, 2]);
  expect(grayCode(3)).toEqual([0, 1, 3, 2, 6, 7, 5, 4]);
  expect(grayCode(4)).toEqual([
    0,
    1,
    3,
    2,
    6,
    7,
    5,
    4,
    12,
    13,
    15,
    14,
    10,
    11,
    9,
    8
  ]);
});

import numRescueBoats from "../../code/greed/numRescueBoats";

test("numRescueBoats", () => {
  expect(numRescueBoats([1, 2], 3)).toBe(1);
  expect(numRescueBoats([1, 2, 3], 8)).toBe(2);
  expect(numRescueBoats([3, 2, 2, 1], 3)).toBe(3);
  expect(numRescueBoats([3, 5, 3, 4], 5)).toBe(4);
  expect(numRescueBoats([5, 1, 4, 2], 6)).toBe(2);
  expect(
    numRescueBoats(
      [
        2,
        49,
        10,
        7,
        11,
        41,
        47,
        2,
        22,
        6,
        13,
        12,
        33,
        18,
        10,
        26,
        2,
        6,
        50,
        10
      ],
      50
    )
  ).toBe(11);
});

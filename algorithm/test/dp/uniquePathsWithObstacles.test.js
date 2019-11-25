import uniquePathsWithObstacles from "../../code/dp/uniquePathsWithObstacles";

test("uniquePathsWithObstacles", () => {
  expect(
    uniquePathsWithObstacles(
      [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ],
      3,
      3
    )
  ).toBe(2);
});

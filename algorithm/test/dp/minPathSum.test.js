import minPathSum from "../../code/dp/minPathSum";

test("minPathSum", () => {
  expect(
    minPathSum([
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1]
    ])
  ).toBe(7);
});

import maximalRectangle from "../../code/stack/maximalRectangle";

test("maximalRectangle", () => {
  expect(
    maximalRectangle([
      ["1", "0", "1", "0", "0"],
      ["1", "0", "1", "1", "1"],
      ["1", "1", "1", "1", "1"],
      ["1", "0", "0", "1", "0"]
    ])
  ).toBe(6);
  expect(
    maximalRectangle([
      ["0", "1", "1", "1", "0", "0", "1", "1", "1", "1", "0", "0"],
      ["0", "0", "1", "1", "0", "1", "1", "1", "1", "0", "0", "1"],
      ["0", "1", "1", "1", "0", "0", "1", "1", "1", "1", "1", "1"],
      ["0", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
      ["0", "1", "1", "0", "0", "0", "1", "1", "1", "1", "1", "1"]
    ])
  ).toBe(18);
});

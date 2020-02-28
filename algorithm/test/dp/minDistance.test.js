import minDistance from "../../code/dp/minDistance";

test("minDistance", () => {
  expect(minDistance("horse", "ros")).toBe(3);
  expect(minDistance("intention", "execution")).toBe(5);
  expect(minDistance("", "")).toBe(0);
});

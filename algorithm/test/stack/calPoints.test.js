import calPoints from "../../code/stack/calPoints";

test("calPoints", () => {
  expect(calPoints(["5", "2", "C", "D", "+"])).toBe(30);
  expect(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])).toBe(27);
});

import minSteps from "../../code/dp/minSteps";

test("minSteps", () => {
  expect(minSteps(2)).toBe(2);
  expect(minSteps(3)).toBe(3);
  expect(minSteps(4)).toBe(4);
  expect(minSteps(5)).toBe(5);
  expect(minSteps(6)).toBe(5);
  expect(minSteps(10)).toBe(7);
});

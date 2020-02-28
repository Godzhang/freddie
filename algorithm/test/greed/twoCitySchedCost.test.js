import twoCitySchedCost from "../../code/greed/twoCitySchedCost";

test("twoCitySchedCost", () => {
  expect(
    twoCitySchedCost([
      [10, 20],
      [30, 200],
      [400, 50],
      [30, 20]
    ])
  ).toBe(110);
  expect(
    twoCitySchedCost([
      [10, 50],
      [10, 100]
    ])
  ).toBe(60);
});

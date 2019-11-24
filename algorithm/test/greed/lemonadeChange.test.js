import lemonadeChange from "../../code/greed/lemonadeChange";

test("lemonadeChange", () => {
  expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true);
  expect(lemonadeChange([5, 5, 10])).toBe(true);
  expect(lemonadeChange([10, 10])).toBe(false);
  expect(lemonadeChange([5, 5, 10, 10, 20])).toBe(false);
});

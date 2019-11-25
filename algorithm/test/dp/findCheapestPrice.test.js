import findCheapestPrice from "../../code/dp/findCheapestPrice";

test("findCheapestPrice", () => {
  expect(findCheapestPrice(0, 2, 1)).toBe(200);
  expect(findCheapestPrice(0, 2, 0)).toBe(500);
});

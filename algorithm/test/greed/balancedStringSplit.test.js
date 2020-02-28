import balancedStringSplit from "../../code/greed/balancedStringSplit";

test("balancedStringSplit", () => {
  expect(balancedStringSplit("RLRRLLRLRL")).toBe(4);
  expect(balancedStringSplit("RLLLLRRRLR")).toBe(3);
  expect(balancedStringSplit("LLLLRRRR")).toBe(1);
});

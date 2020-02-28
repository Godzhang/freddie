import getLeastNumbers from "../../code/heap/getLeastNumbers";

test("getLeastNumbers", () => {
  expect(getLeastNumbers([3, 2, 1], 2).join()).toMatch(/1,2|2,1/);
  expect(getLeastNumbers([0, 1, 2, 1], 1).join()).toMatch(/0/);
});

import { add, sub } from "../src/math";

test("add", () => {
  expect(add(1, 1)).toBe(2);
});
test("sub", () => {
  expect(sub(1, 1)).toBe(0);
});

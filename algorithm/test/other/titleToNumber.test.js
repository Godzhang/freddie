import titleToNumber from "../../code/other/titleToNumber";

test("titleToNumber", () => {
  expect(titleToNumber("A")).toBe(1);
  expect(titleToNumber("AB")).toBe(28);
  expect(titleToNumber("ZY")).toBe(701);
  expect(titleToNumber("BMK")).toBe(1701);
});

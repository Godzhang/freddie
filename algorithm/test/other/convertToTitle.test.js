import convertToTitle from "../../code/other/convertToTitle";

test("convertToTitle", () => {
  expect(convertToTitle(1)).toBe("A");
  expect(convertToTitle(28)).toBe("AB");
  expect(convertToTitle(52)).toBe("AZ");
  expect(convertToTitle(701)).toBe("ZY");
  expect(convertToTitle(1701)).toBe("BMK");
});

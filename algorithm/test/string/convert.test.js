import convert from "../../code/string/convert";

test("convert", () => {
  expect(convert("LEETCODEISHIRING", 3)).toBe("LCIRETOESIIGEDHN");
  expect(convert("LEETCODEISHIRING", 4)).toBe("LDREOEIIECIHNTSG");
  expect(convert("LEETCODEISHIRING", 5)).toBe("LIEESGEDHNTOIICR");
  expect(convert("A", 1)).toBe("A");
});

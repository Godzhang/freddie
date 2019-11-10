import letterCombinations from "../../code/array/letterCombinations";

test("", () => {
  expect(letterCombinations("23")).toBe([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf"
  ]);
});

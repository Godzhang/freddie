import addStrings from "../../code/string/addStrings";

test("addStrings", () => {
  expect(addStrings("123", "456")).toBe("579");
  expect(addStrings("12345", "21")).toBe("12366");
  expect(addStrings("9", "9")).toBe("18");
  expect(addStrings("9", "99")).toBe("108");
});

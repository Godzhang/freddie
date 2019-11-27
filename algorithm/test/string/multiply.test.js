import multiply from "../../code/string/multiply";

test("multiply", () => {
  expect(multiply("2", "3")).toBe("6");
  expect(multiply("123", "456")).toBe("56088");
  expect(multiply("9", "9")).toBe("81");
});

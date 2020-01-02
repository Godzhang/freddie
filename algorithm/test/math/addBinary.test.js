import addBinary from "../../code/math/addBinary";

test("addBinary", () => {
  expect(addBinary("0", "0")).toBe("0");
  expect(addBinary("11", "1")).toBe("100");
  expect(addBinary("1010", "1011")).toBe("10101");
  expect(addBinary("101111", "10")).toBe("110001");
});

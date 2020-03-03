const { defaultToString } = require("../utils");

test("defaultToString", () => {
  expect(defaultToString(null)).toBe("null");

  expect(defaultToString(undefined)).toBe("undefined");

  expect(defaultToString(1)).toBe("1");

  expect(defaultToString(true)).toBe("true");
  expect(defaultToString(false)).toBe("false");

  expect(defaultToString("zhangqi")).toBe("zhangqi");

  expect(defaultToString([1, 2, 3])).toBe("1,2,3");
  expect(
    defaultToString([
      [1, 2, 3],
      [4, 5, 6]
    ])
  ).toBe("1,2,3,4,5,6");

  expect(defaultToString({ name: "zhangqi" })).toBe("[object Object]");

  expect(defaultToString(Symbol("1"))).toBe("Symbol(1)");

  expect(defaultToString(new Set())).toBe("[object Set]");

  expect(defaultToString(new Map())).toBe("[object Map]");
});

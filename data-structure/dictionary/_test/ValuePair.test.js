const ValuePair = require("../ValuePair");

test("constructor", () => {
  let key = "name";
  let value = "zhangqi";
  let valuePair = new ValuePair(key, value);
  expect(valuePair.key).toBe(key);
  expect(valuePair.value).toBe(value);
});

test("toString", () => {
  let key = "name";
  let value = "zhangqi";
  let valuePair = new ValuePair(key, value);
  expect(valuePair.toString()).toBe("[#name:zhangqi]");
});

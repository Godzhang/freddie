const Dictionary = require("../Dictionary");
const ValuePair = require("../ValuePair");

test("constructor", () => {
  const dictionary = new Dictionary();

  expect(dictionary.table).toEqual({});
});

test("set", () => {
  const dictionary = new Dictionary();
  dictionary.set("name", "zhangqi");
  expect(dictionary.toString()).toBe("[#name:zhangqi]");
});

test("remove", () => {
  const dictionary = new Dictionary();
  dictionary.set("name", "zhangqi");
  expect(dictionary.toString()).toBe("[#name:zhangqi]");

  dictionary.remove("name");
  expect(dictionary.toString()).toBe("");
});

test("hasKey", () => {
  const dictionary = new Dictionary();
  expect(dictionary.hasKey("name")).toBeFalsy();

  dictionary.set("name", "zhangqi");
  expect(dictionary.hasKey("name")).toBeTruthy();
});

test("get", () => {
  const dictionary = new Dictionary();
  expect(dictionary.get("name")).toBeNull();

  dictionary.set("name", "zhangqi");
  expect(dictionary.get("name")).toBe("zhangqi");
});

test("clear", () => {
  const dictionary = new Dictionary();
  expect(dictionary.table).toEqual({});

  dictionary.set("name", "zhangqi");
  expect(dictionary.toString()).toBe("[#name:zhangqi]");

  dictionary.clear();
  expect(dictionary.table).toEqual({});
});

test("size", () => {
  const dictionary = new Dictionary();
  expect(dictionary.size()).toBe(0);

  dictionary.set("name", "zhangqi");
  expect(dictionary.size()).toBe(1);

  dictionary.set("age", "30");
  expect(dictionary.size()).toBe(2);
});

test("isEmpty", () => {
  const dictionary = new Dictionary();
  expect(dictionary.isEmpty()).toBeTruthy();

  dictionary.set("name", "zhangqi");
  expect(dictionary.isEmpty()).toBeFalsy();
});

test("keys", () => {
  const dictionary = new Dictionary();

  dictionary.set("name", "zhangqi");
  dictionary.set("age", "30");
  expect(dictionary.keys()).toEqual(["name", "age"]);
});

test("values", () => {
  const dictionary = new Dictionary();

  dictionary.set("name", "zhangqi");
  dictionary.set("age", 30);
  expect(dictionary.values()).toEqual(["zhangqi", 30]);
});

test("keyValues", () => {
  const dictionary = new Dictionary();

  dictionary.set("name", "zhangqi");
  dictionary.set("age", 30);

  expect(dictionary.keyValues()).toEqual([
    new ValuePair("name", "zhangqi"),
    new ValuePair("age", 30)
  ]);
});

test("forEach", () => {
  const dictionary = new Dictionary();
  dictionary.set("name", "zhangqi");
  dictionary.set("age", 30);
  dictionary.forEach((key, value) => {
    expect(dictionary.get(key)).toBe(value);
  });
});

test("toString", () => {
  const dictionary = new Dictionary();
  dictionary.set("name", "zhangqi");
  dictionary.set("age", 30);
  expect(dictionary.toString()).toBe("[#name:zhangqi],[#age:30]");
});

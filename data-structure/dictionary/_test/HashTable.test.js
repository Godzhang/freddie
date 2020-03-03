const HashTable = require("../HashTable");
const ValuePair = require("../ValuePair");

test("constructor", () => {
  const hashTable = new HashTable();
  expect(hashTable.table).toEqual({});
});

test("put", () => {
  const hashTable = new HashTable();
  hashTable.put("name", "zhangqi");
  expect(hashTable.get("name")).toBe("zhangqi");
});

test("remove", () => {
  const hashTable = new HashTable();
  hashTable.put("name", "zhangqi");
  hashTable.remove("name");
  expect(hashTable.table).toEqual({});
});

test("get", () => {
  const hashTable = new HashTable();
  hashTable.put("name", "zhangqi");
  expect(hashTable.get("name")).toBe("zhangqi");
});

test("keys", () => {
  const hashTable = new HashTable();
  hashTable.put("name", "zhangqi");
  hashTable.put("age", 30);
  expect(hashTable.keys()).toEqual(["age", "name"]);
});

test("values", () => {
  const hashTable = new HashTable();
  hashTable.put("name", "zhangqi");
  hashTable.put("age", 30);
  expect(hashTable.values()).toEqual([30, "zhangqi"]);
});

test("keyValues", () => {
  const hashTable = new HashTable();
  hashTable.put("name", "zhangqi");
  hashTable.put("age", 30);

  expect(hashTable.keyValues()).toEqual([
    new ValuePair("age", 30),
    new ValuePair("name", "zhangqi")
  ]);
});

test("toString", () => {
  const hashTable = new HashTable();
  hashTable.put("name", "zhangqi");
  hashTable.put("age", 30);
  expect(hashTable.toString()).toBe("[#age:30],[#name:zhangqi]");
});

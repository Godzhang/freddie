const MaxHeap = require("../MaxHeap");

test("constructor", () => {
  let maxHeap = new MaxHeap();

  expect(maxHeap.heap).toEqual([]);
  expect(maxHeap.heap.length).toBe(0);
});

test("insert", () => {
  let maxHeap = new MaxHeap();

  maxHeap.insert(4);
  expect(maxHeap.heap).toEqual([4]);

  maxHeap.insert(3);
  expect(maxHeap.heap).toEqual([4, 3]);

  maxHeap.insert(7);
  expect(maxHeap.heap).toEqual([7, 3, 4]);

  maxHeap.insert(10);
  expect(maxHeap.heap).toEqual([10, 7, 4, 3]);
});

test("from", () => {
  let maxHeap = MaxHeap.from([7, 3, 4, 10]);
  expect(maxHeap).toEqual([10, 7, 4, 3]);
});

test("extract", () => {
  let maxHeap = new MaxHeap();
  [7, 3, 4, 10].forEach(val => maxHeap.insert(val));

  expect(maxHeap.extract()).toBe(10);
  expect(maxHeap.extract()).toBe(7);
  expect(maxHeap.extract()).toBe(4);
  expect(maxHeap.extract()).toBe(3);

  expect(maxHeap.heap).toEqual([]);
});

test("findMaximum", () => {
  let maxHeap = new MaxHeap();

  maxHeap.insert(7);
  expect(maxHeap.findMaximum()).toBe(7);

  maxHeap.insert(4);
  expect(maxHeap.findMaximum()).toBe(7);

  maxHeap.insert(10);
  expect(maxHeap.findMaximum()).toBe(10);
});

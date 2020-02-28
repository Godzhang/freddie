const MinHeap = require("../MinHeap");

test("constructor", () => {
  let minHeap = new MinHeap();

  expect(minHeap.heap).toEqual([]);
  expect(minHeap.heap.length).toBe(0);
});

test("insert", () => {
  let minHeap = new MinHeap();

  minHeap.insert(10);
  expect(minHeap.heap).toEqual([10]);

  minHeap.insert(4);
  expect(minHeap.heap).toEqual([4, 10]);

  minHeap.insert(3);
  expect(minHeap.heap).toEqual([3, 10, 4]);

  minHeap.insert(7);
  expect(minHeap.heap).toEqual([3, 7, 4, 10]);
});

test("from", () => {
  let minHeap = MinHeap.from([7, 3, 4, 10]);
  expect(minHeap).toEqual([3, 7, 4, 10]);
});

test("extract", () => {
  let minHeap = new MinHeap();
  [7, 3, 4, 10].forEach(val => minHeap.insert(val));

  expect(minHeap.extract()).toBe(3);
  expect(minHeap.extract()).toBe(4);
  expect(minHeap.extract()).toBe(7);
  expect(minHeap.extract()).toBe(10);

  expect(minHeap.heap).toEqual([]);
});

test("findMinimum", () => {
  let minHeap = new MinHeap();

  minHeap.insert(7);
  expect(minHeap.findMinimum()).toBe(7);

  minHeap.insert(4);
  expect(minHeap.findMinimum()).toBe(4);

  minHeap.insert(10);
  expect(minHeap.findMinimum()).toBe(4);
});

const PriorityQueue = require("../PriorityQueue");

test("constructor", () => {
  const priorityQueue = new PriorityQueue();

  expect(priorityQueue.size).toBe(0);
  expect(priorityQueue.heap.length).toBe(32);

  const priorityQueue2 = new PriorityQueue(10);

  expect(priorityQueue2.size).toBe(0);
  expect(priorityQueue2.heap.length).toBe(10);
});

test("enQueue", () => {
  const priorityQueue = new PriorityQueue(5);

  priorityQueue.enQueue(1);
  expect(priorityQueue.size).toBe(1);
  expect(priorityQueue.heap.slice(0, priorityQueue.size)).toEqual([1]);
  expect(priorityQueue.heap.length).toBe(5);

  priorityQueue.enQueue(5);
  expect(priorityQueue.size).toBe(2);
  expect(priorityQueue.heap.slice(0, priorityQueue.size)).toEqual([5, 1]);

  priorityQueue.enQueue(3);
  expect(priorityQueue.size).toBe(3);
  expect(priorityQueue.heap.slice(0, priorityQueue.size)).toEqual([5, 1, 3]);

  priorityQueue.enQueue(4);
  expect(priorityQueue.size).toBe(4);
  expect(priorityQueue.heap.slice(0, priorityQueue.size)).toEqual([5, 4, 3, 1]);

  priorityQueue.enQueue(8);
  expect(priorityQueue.size).toBe(5);
  expect(priorityQueue.heap.slice(0, priorityQueue.size)).toEqual([
    8,
    5,
    3,
    1,
    4
  ]);

  priorityQueue.enQueue(2);
  expect(priorityQueue.size).toBe(6);
  expect(priorityQueue.heap.slice(0, priorityQueue.size)).toEqual([
    8,
    5,
    3,
    1,
    4,
    2
  ]);
  expect(priorityQueue.heap.length).toBe(10);
});

test("deQueue", () => {
  const priorityQueue = new PriorityQueue(5);

  priorityQueue.enQueue(1);
  priorityQueue.enQueue(5);
  priorityQueue.enQueue(3);
  priorityQueue.enQueue(4);
  priorityQueue.enQueue(8);
  priorityQueue.enQueue(2);
  expect(priorityQueue.size).toBe(6);
  expect(priorityQueue.heap.slice(0, priorityQueue.size)).toEqual([
    8,
    5,
    3,
    1,
    4,
    2
  ]);
  expect(priorityQueue.heap.length).toBe(10);

  let head;
  head = priorityQueue.deQueue();
  expect(head).toBe(8);
  expect(priorityQueue.size).toBe(5);
  expect(priorityQueue.heap.slice(0, priorityQueue.size)).toEqual([
    5,
    4,
    3,
    1,
    2
  ]);
  expect(priorityQueue.heap.length).toBe(10);

  head = priorityQueue.deQueue();
  expect(head).toBe(5);
  expect(priorityQueue.size).toBe(4);
  expect(priorityQueue.heap.slice(0, priorityQueue.size)).toEqual([4, 2, 3, 1]);
  expect(priorityQueue.heap.length).toBe(10);

  head = priorityQueue.deQueue();
  expect(head).toBe(4);
  expect(priorityQueue.size).toBe(3);
  expect(priorityQueue.heap.slice(0, priorityQueue.size)).toEqual([3, 2, 1]);
  expect(priorityQueue.heap.length).toBe(10);

  head = priorityQueue.deQueue();
  expect(head).toBe(3);
  expect(priorityQueue.size).toBe(2);
  expect(priorityQueue.heap.slice(0, priorityQueue.size)).toEqual([2, 1]);
  expect(priorityQueue.heap.length).toBe(10);

  head = priorityQueue.deQueue();
  expect(head).toBe(2);
  expect(priorityQueue.size).toBe(1);
  expect(priorityQueue.heap.slice(0, priorityQueue.size)).toEqual([1]);
  expect(priorityQueue.heap.length).toBe(10);

  head = priorityQueue.deQueue();
  expect(head).toBe(1);
  expect(priorityQueue.size).toBe(0);
  expect(priorityQueue.heap.slice(0, priorityQueue.size)).toEqual([]);
  expect(priorityQueue.heap.length).toBe(10);

  head = priorityQueue.deQueue();
  expect(head).toBe(undefined);
  expect(priorityQueue.size).toBe(0);
});

test("resize", () => {
  const priorityQueue = new PriorityQueue(5);

  expect(priorityQueue.size).toBe(0);
  expect(priorityQueue.heap.length).toBe(5);

  priorityQueue.resize();
  expect(priorityQueue.heap.length).toBe(10);

  priorityQueue.resize();
  expect(priorityQueue.heap.length).toBe(20);
});

const LinkedList = require("../LinkedList");

test("push", () => {
  const linkedList = new LinkedList();

  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();

  linkedList.push(1);

  expect(linkedList.toString()).toBe("1");
  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(1);
  expect(linkedList.tail.next).toBeNull();

  linkedList.push(2);

  expect(linkedList.toString()).toBe("1,2");
  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(2);
  expect(linkedList.tail.next).toBeNull();
});

test("pop", () => {
  const linkedList = new LinkedList();

  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();

  let popNode = linkedList.pop();

  expect(popNode).toBeNull();

  linkedList.push(1);
  linkedList.push(2);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(2);
  expect(linkedList.toString()).toBe("1,2");
  expect(linkedList.toArray()).toEqual([1, 2]);

  popNode = linkedList.pop();

  expect(popNode.val).toBe(2);
  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(1);
  expect(linkedList.toString()).toBe("1");
  expect(linkedList.toArray()).toEqual([1]);

  popNode = linkedList.pop();

  expect(popNode.val).toBe(1);
  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();
  expect(linkedList.toString()).toBe("");
  expect(linkedList.toArray()).toEqual([]);
});

test("unshift", () => {
  const linkedList = new LinkedList();

  linkedList.unshift(2);

  expect(linkedList.head.val).toBe(2);
  expect(linkedList.tail.val).toBe(2);
  expect(linkedList.count).toBe(1);
  expect(linkedList.toString()).toBe("2");
  expect(linkedList.toArray()).toEqual([2]);

  linkedList.push(1);
  linkedList.unshift(3);

  expect(linkedList.head.val).toBe(3);
  expect(linkedList.tail.val).toBe(1);
  expect(linkedList.count).toBe(3);
  expect(linkedList.toString()).toBe("3,2,1");
  expect(linkedList.toArray()).toEqual([3, 2, 1]);
});

test("shift", () => {
  const linkedList = new LinkedList();

  let shiftNode = linkedList.shift();

  expect(shiftNode).toBeNull();

  linkedList.unshift(2);
  linkedList.unshift(1);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(2);
  expect(linkedList.count).toBe(2);
  expect(linkedList.toString()).toBe("1,2");
  expect(linkedList.toArray()).toEqual([1, 2]);

  shiftNode = linkedList.shift();

  expect(shiftNode.val).toBe(1);
  expect(linkedList.head.val).toBe(2);
  expect(linkedList.tail.val).toBe(2);
  expect(linkedList.count).toBe(1);
  expect(linkedList.toString()).toBe("2");
  expect(linkedList.toArray()).toEqual([2]);

  shiftNode = linkedList.shift();

  expect(shiftNode.val).toBe(2);
  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();
  expect(linkedList.count).toBe(0);
  expect(linkedList.toString()).toBe("");
  expect(linkedList.toArray()).toEqual([]);
});

test("from", () => {
  const linkedList = new LinkedList();

  linkedList.from([1, 2, 3, 4, 5]);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.toString()).toBe("1,2,3,4,5");
  expect(linkedList.toArray()).toEqual([1, 2, 3, 4, 5]);

  /**
   * 空数组
   */
  const linkedList2 = new LinkedList();

  linkedList2.from([]);

  expect(linkedList2.head).toBeNull();
  expect(linkedList2.toString()).toBe("");
  expect(linkedList2.toArray()).toEqual([]);
});

test("reverse", () => {
  const linkedList = new LinkedList();

  linkedList.from([1, 2, 3, 4, 5]);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(5);
  expect(linkedList.toString()).toBe("1,2,3,4,5");
  expect(linkedList.toArray()).toEqual([1, 2, 3, 4, 5]);

  linkedList.reverse();

  expect(linkedList.head.val).toBe(5);
  expect(linkedList.tail.val).toBe(1);
  expect(linkedList.toString()).toBe("5,4,3,2,1");
  expect(linkedList.toArray()).toEqual([5, 4, 3, 2, 1]);
});

test("toArray", () => {
  const linkedList = new LinkedList();

  expect(linkedList.toArray()).toEqual([]);

  linkedList.from([1, 2, 3, 4, 5]);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.toString()).toBe("1,2,3,4,5");
  expect(linkedList.toArray()).toEqual([1, 2, 3, 4, 5]);
});

test("toString", () => {
  const linkedList = new LinkedList();

  expect(linkedList.toString()).toEqual("");

  linkedList.from([1, 2, 3, 4, 5]);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.toString()).toBe("1,2,3,4,5");
  expect(linkedList.toArray()).toEqual([1, 2, 3, 4, 5]);

  /**
   * callback
   */
  const linkedList2 = new LinkedList();

  linkedList2.unshift({ key: "a", value: 1 });
  linkedList2.push({ key: "b", value: 2 });

  const callback = val => `${val.key}: ${val.value}`;

  expect(linkedList2.head.val.value).toBe(1);
  expect(linkedList2.toString(callback)).toBe(`a: 1,b: 2`);
});

test("insert", () => {
  const linkedList = new LinkedList();

  let res = linkedList.insert(1, 0);

  expect(res).toBeTruthy();
  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(1);
  expect(linkedList.toString()).toBe("1");
  expect(linkedList.toArray()).toEqual([1]);

  res = linkedList.insert(2, 2);

  expect(res).toBeFalsy();
  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(1);
  expect(linkedList.toString()).toBe("1");
  expect(linkedList.toArray()).toEqual([1]);

  res = linkedList.insert(2, 1);

  expect(res).toBeTruthy();
  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(2);
  expect(linkedList.toString()).toBe("1,2");
  expect(linkedList.toArray()).toEqual([1, 2]);

  res = linkedList.insert(3, 1);

  expect(res).toBeTruthy();
  expect(linkedList.head.val).toBe(1);
  expect(linkedList.tail.val).toBe(2);
  expect(linkedList.toString()).toBe("1,3,2");
  expect(linkedList.toArray()).toEqual([1, 3, 2]);
});

test("indexOf", () => {
  const linkedList = new LinkedList();

  linkedList.from([1, 2, 3, 4, 5]);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.indexOf(0)).toBe(-1);
  expect(linkedList.indexOf(1)).toBe(0);
  expect(linkedList.indexOf(4)).toBe(3);
  expect(linkedList.indexOf(5)).toBe(4);
});

test("getElementAt", () => {
  const linkedList = new LinkedList();

  linkedList.from([1, 2, 3, 4, 5]);

  expect(linkedList.head.val).toBe(1);
  expect(linkedList.getElementAt(0).val).toBe(1);
  expect(linkedList.getElementAt(2).val).toBe(3);
  expect(linkedList.getElementAt(4).val).toBe(5);
  expect(linkedList.getElementAt(5)).toBeNull();
});

test("removeAt", () => {
  const linkedList = new LinkedList();

  linkedList.from([1, 2, 3, 4, 5]);

  let removedNode = linkedList.removeAt(0);

  expect(removedNode.val).toBe(1);
  expect(linkedList.head.val).toBe(2);
  expect(linkedList.tail.val).toBe(5);
  expect(linkedList.toString()).toBe("2,3,4,5");
  expect(linkedList.toArray()).toEqual([2, 3, 4, 5]);

  removedNode = linkedList.removeAt(5);

  expect(removedNode).toBeNull();
  expect(linkedList.head.val).toBe(2);
  expect(linkedList.tail.val).toBe(5);
  expect(linkedList.toString()).toBe("2,3,4,5");
  expect(linkedList.toArray()).toEqual([2, 3, 4, 5]);

  removedNode = linkedList.removeAt(2);

  expect(removedNode.val).toBe(4);
  expect(linkedList.head.val).toBe(2);
  expect(linkedList.tail.val).toBe(5);
  expect(linkedList.toString()).toBe("2,3,5");
  expect(linkedList.toArray()).toEqual([2, 3, 5]);

  removedNode = linkedList.removeAt(2);

  expect(removedNode.val).toBe(5);
  expect(linkedList.head.val).toBe(2);
  expect(linkedList.tail.val).toBe(3);
  expect(linkedList.toString()).toBe("2,3");
  expect(linkedList.toArray()).toEqual([2, 3]);
});

test("remove", () => {
  const linkedList = new LinkedList();

  linkedList.from([1, 2, 3, 4, 5]);

  let removedNode = linkedList.remove(0);

  expect(removedNode).toBeNull();

  removedNode = linkedList.remove(1);

  expect(removedNode.val).toBe(1);
  expect(linkedList.head.val).toBe(2);
  expect(linkedList.toString()).toBe("2,3,4,5");
  expect(linkedList.toArray()).toEqual([2, 3, 4, 5]);

  removedNode = linkedList.remove(4);

  expect(removedNode.val).toBe(4);
  expect(linkedList.head.val).toBe(2);
  expect(linkedList.tail.val).toBe(5);
  expect(linkedList.toString()).toBe("2,3,5");
  expect(linkedList.toArray()).toEqual([2, 3, 5]);

  removedNode = linkedList.remove(5);

  expect(removedNode.val).toBe(5);
  expect(linkedList.head.val).toBe(2);
  expect(linkedList.tail.val).toBe(3);
  expect(linkedList.toString()).toBe("2,3");
  expect(linkedList.toArray()).toEqual([2, 3]);
});

test("size", () => {
  const linkedList = new LinkedList();

  let size = linkedList.size();

  expect(size).toBe(0);

  linkedList.from([1, 2, 3, 4, 5]);

  size = linkedList.size();

  expect(size).toBe(5);
});

test("isEmpty", () => {
  const linkedList = new LinkedList();

  let isEmpty = linkedList.isEmpty();

  expect(isEmpty).toBeTruthy();

  linkedList.from([1, 2, 3, 4, 5]);

  isEmpty = linkedList.isEmpty();

  expect(isEmpty).toBeFalsy();
});

test("getHead", () => {
  const linkedList = new LinkedList();

  linkedList.from([1, 2, 3, 4, 5]);

  let head = linkedList.getHead();

  expect(head.val).toBe(1);

  linkedList.shift();
  head = linkedList.getHead();

  expect(head.val).toBe(2);
});

test("getTail", () => {
  const linkedList = new LinkedList();

  linkedList.from([1, 2, 3, 4, 5]);

  let tail = linkedList.getTail();

  expect(tail.val).toBe(5);

  linkedList.pop();
  tail = linkedList.getTail();

  expect(tail.val).toBe(4);

  linkedList.reverse();
  tail = linkedList.getTail();

  expect(tail.val).toBe(1);
});

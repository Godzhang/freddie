const DoubleLinkedList = require("../DoubleLinkedList");

test("push", () => {
  const doubleLinkedList = new DoubleLinkedList();

  expect(doubleLinkedList.head).toBeNull();
  expect(doubleLinkedList.tail).toBeNull();

  let pushResult = doubleLinkedList.push(1);

  expect(pushResult).toBe(1);
  expect(doubleLinkedList.toString()).toBe("1");
  expect(doubleLinkedList.head.val).toBe(1);
  expect(doubleLinkedList.tail.val).toBe(1);
  expect(doubleLinkedList.tail.prev).toBeNull();
  expect(doubleLinkedList.tail.next).toBeNull();

  pushResult = doubleLinkedList.push(2);

  expect(pushResult).toBe(2);
  expect(doubleLinkedList.toString()).toBe("1,2");
  expect(doubleLinkedList.head.val).toBe(1);
  expect(doubleLinkedList.tail.val).toBe(2);
  expect(doubleLinkedList.tail.prev.val).toBe(1);
  expect(doubleLinkedList.tail.next).toBeNull();
});

test("pop", () => {
  const doubleLinkedList = new DoubleLinkedList();

  doubleLinkedList.push(1);
  doubleLinkedList.push(2);

  expect(doubleLinkedList.toString()).toBe("1,2");
  expect(doubleLinkedList.head.val).toBe(1);
  expect(doubleLinkedList.tail.val).toBe(2);
  expect(doubleLinkedList.count).toBe(2);

  let popNode = doubleLinkedList.pop();

  expect(popNode.val).toBe(2);
  expect(doubleLinkedList.toString()).toBe("1");
  expect(doubleLinkedList.head.val).toBe(1);
  expect(doubleLinkedList.tail.val).toBe(1);
  expect(doubleLinkedList.count).toBe(1);

  popNode = doubleLinkedList.pop();

  expect(popNode.val).toBe(1);
  expect(doubleLinkedList.toString()).toBe("");
  expect(doubleLinkedList.head).toBeNull();
  expect(doubleLinkedList.tail).toBeNull();
  expect(doubleLinkedList.count).toBe(0);

  popNode = doubleLinkedList.pop();

  expect(popNode).toBeNull();
  expect(doubleLinkedList.toString()).toBe("");
  expect(doubleLinkedList.head).toBeNull();
  expect(doubleLinkedList.tail).toBeNull();
  expect(doubleLinkedList.count).toBe(0);
});

test("unshift", () => {
  const doubleLinkedList = new DoubleLinkedList();

  expect(doubleLinkedList.head).toBeNull();
  expect(doubleLinkedList.tail).toBeNull();

  let unshiftResult = doubleLinkedList.unshift(1);

  expect(unshiftResult).toBe(1);
  expect(doubleLinkedList.toString()).toBe("1");
  expect(doubleLinkedList.head.val).toBe(1);
  expect(doubleLinkedList.tail.val).toBe(1);
  expect(doubleLinkedList.tail.prev).toBeNull();
  expect(doubleLinkedList.tail.next).toBeNull();

  unshiftResult = doubleLinkedList.unshift(2);

  expect(unshiftResult).toBe(2);
  expect(doubleLinkedList.toString()).toBe("2,1");
  expect(doubleLinkedList.head.val).toBe(2);
  expect(doubleLinkedList.tail.val).toBe(1);
  expect(doubleLinkedList.tail.prev.val).toBe(2);
  expect(doubleLinkedList.tail.next).toBeNull();
});

test("shift", () => {
  const doubleLinkedList = new DoubleLinkedList();

  doubleLinkedList.unshift(1);
  doubleLinkedList.unshift(2);

  expect(doubleLinkedList.toString()).toBe("2,1");
  expect(doubleLinkedList.head.val).toBe(2);
  expect(doubleLinkedList.tail.val).toBe(1);
  expect(doubleLinkedList.count).toBe(2);

  let shiftNode = doubleLinkedList.shift();

  expect(shiftNode.val).toBe(2);
  expect(doubleLinkedList.toString()).toBe("1");
  expect(doubleLinkedList.head.val).toBe(1);
  expect(doubleLinkedList.tail.val).toBe(1);
  expect(doubleLinkedList.count).toBe(1);

  shiftNode = doubleLinkedList.shift();

  expect(shiftNode.val).toBe(1);
  expect(doubleLinkedList.toString()).toBe("");
  expect(doubleLinkedList.head).toBeNull();
  expect(doubleLinkedList.tail).toBeNull();
  expect(doubleLinkedList.count).toBe(0);

  shiftNode = doubleLinkedList.shift();

  expect(shiftNode).toBeNull();
  expect(doubleLinkedList.toString()).toBe("");
  expect(doubleLinkedList.head).toBeNull();
  expect(doubleLinkedList.tail).toBeNull();
  expect(doubleLinkedList.count).toBe(0);
});

test("from", () => {
  const doubleLinkedList = new DoubleLinkedList();

  doubleLinkedList.from([1, 2, 3, 4, 5]);

  expect(doubleLinkedList.head.val).toBe(1);
  expect(doubleLinkedList.tail.val).toBe(5);
  expect(doubleLinkedList.toString()).toBe("1,2,3,4,5");
  expect(doubleLinkedList.toArray()).toEqual([1, 2, 3, 4, 5]);

  /**
   * 空数组
   */
  const doubleLinkedList2 = new DoubleLinkedList();

  doubleLinkedList2.from([]);

  expect(doubleLinkedList2.head).toBeNull();
  expect(doubleLinkedList2.tail).toBeNull();
  expect(doubleLinkedList2.toString()).toBe("");
  expect(doubleLinkedList2.toArray()).toEqual([]);

  const doubleLinkedList3 = new DoubleLinkedList();

  doubleLinkedList3.from([1]);

  expect(doubleLinkedList3.head.val).toBe(1);
  expect(doubleLinkedList3.tail.val).toBe(1);
  expect(doubleLinkedList3.toString()).toBe("1");
  expect(doubleLinkedList3.toArray()).toEqual([1]);
});

test("reverse", () => {
  const doubleLinkedList = new DoubleLinkedList();

  doubleLinkedList.from([1, 2, 3]);

  expect(doubleLinkedList.head.prev).toBeNull();
  expect(doubleLinkedList.head.val).toBe(1);
  expect(doubleLinkedList.head.next.val).toBe(2);
  expect(doubleLinkedList.tail.prev.val).toBe(2);
  expect(doubleLinkedList.tail.val).toBe(3);
  expect(doubleLinkedList.tail.next).toBeNull();
  expect(doubleLinkedList.toString()).toBe("1,2,3");

  doubleLinkedList.reverse();

  expect(doubleLinkedList.head.prev).toBeNull();
  expect(doubleLinkedList.head.val).toBe(3);
  expect(doubleLinkedList.head.next.val).toBe(2);
  expect(doubleLinkedList.tail.prev.val).toBe(2);
  expect(doubleLinkedList.tail.val).toBe(1);
  expect(doubleLinkedList.tail.next).toBeNull();
  expect(doubleLinkedList.toString()).toBe("3,2,1");
});

test("toArray", () => {
  const doubleLinkedList = new DoubleLinkedList();

  expect(doubleLinkedList.toArray()).toEqual([]);

  doubleLinkedList.from([1, 2, 3, 4, 5]);

  expect(doubleLinkedList.head.val).toBe(1);
  expect(doubleLinkedList.tail.val).toBe(5);
  expect(doubleLinkedList.count).toBe(5);
  expect(doubleLinkedList.toString()).toBe("1,2,3,4,5");
  expect(doubleLinkedList.toArray()).toEqual([1, 2, 3, 4, 5]);
});

test("toString", () => {
  const doubleLinkedList = new DoubleLinkedList();

  expect(doubleLinkedList.toString()).toBe("");

  doubleLinkedList.from([1, 2, 3, 4, 5]);

  expect(doubleLinkedList.head.val).toBe(1);
  expect(doubleLinkedList.tail.val).toBe(5);
  expect(doubleLinkedList.count).toBe(5);
  expect(doubleLinkedList.toString()).toBe("1,2,3,4,5");
  expect(doubleLinkedList.toArray()).toEqual([1, 2, 3, 4, 5]);
});

test("insert", () => {
  const doubleLinkedList = new DoubleLinkedList();

  let res = doubleLinkedList.insert(1, 0);

  expect(res).toBeTruthy();
  expect(doubleLinkedList.head.val).toBe(1);
  expect(doubleLinkedList.tail.val).toBe(1);
  expect(doubleLinkedList.toString()).toBe("1");
  expect(doubleLinkedList.toArray()).toEqual([1]);

  res = doubleLinkedList.insert(2, 2);

  expect(res).toBeFalsy();
  expect(doubleLinkedList.head.val).toBe(1);
  expect(doubleLinkedList.tail.val).toBe(1);
  expect(doubleLinkedList.toString()).toBe("1");
  expect(doubleLinkedList.toArray()).toEqual([1]);

  res = doubleLinkedList.insert(2, 1);

  expect(res).toBeTruthy();
  expect(doubleLinkedList.head.val).toBe(1);
  expect(doubleLinkedList.head.next.val).toBe(2);
  expect(doubleLinkedList.tail.prev.val).toBe(1);
  expect(doubleLinkedList.tail.val).toBe(2);
  expect(doubleLinkedList.toString()).toBe("1,2");
  expect(doubleLinkedList.toArray()).toEqual([1, 2]);

  res = doubleLinkedList.insert(3, 1);

  expect(res).toBeTruthy();
  expect(doubleLinkedList.head.val).toBe(1);
  expect(doubleLinkedList.head.next.val).toBe(3);
  expect(doubleLinkedList.tail.prev.val).toBe(3);
  expect(doubleLinkedList.tail.val).toBe(2);
  expect(doubleLinkedList.toString()).toBe("1,3,2");
  expect(doubleLinkedList.toArray()).toEqual([1, 3, 2]);
});

test("indexOf", () => {
  const doubleLinkedList = new DoubleLinkedList();

  doubleLinkedList.from([1, 2, 3, 4, 5]);

  expect(doubleLinkedList.head.val).toBe(1);
  expect(doubleLinkedList.indexOf(0)).toBe(-1);
  expect(doubleLinkedList.indexOf(1)).toBe(0);
  expect(doubleLinkedList.indexOf(4)).toBe(3);
  expect(doubleLinkedList.indexOf(5)).toBe(4);
});

test("getElementAt", () => {
  const doubleLinkedList = new DoubleLinkedList();

  doubleLinkedList.from([1, 2, 3, 4, 5]);

  expect(doubleLinkedList.head.val).toBe(1);
  expect(doubleLinkedList.getElementAt(0).val).toBe(1);
  expect(doubleLinkedList.getElementAt(2).val).toBe(3);
  expect(doubleLinkedList.getElementAt(4).val).toBe(5);
  expect(doubleLinkedList.getElementAt(5)).toBeNull();
});

test("removeAt", () => {
  const doubleLinkedList = new DoubleLinkedList();

  doubleLinkedList.from([1, 2, 3]);

  let removeNode = doubleLinkedList.removeAt(0);

  expect(removeNode.val).toBe(1);
  expect(doubleLinkedList.head.prev).toBeNull();
  expect(doubleLinkedList.head.val).toBe(2);
  expect(doubleLinkedList.head.next.val).toBe(3);
  expect(doubleLinkedList.tail.prev.val).toBe(2);
  expect(doubleLinkedList.tail.val).toBe(3);
  expect(doubleLinkedList.tail.next).toBeNull();

  const doubleLinkedList2 = new DoubleLinkedList();

  doubleLinkedList2.from([1, 2, 3]);

  removeNode = doubleLinkedList2.removeAt(1);

  expect(removeNode.val).toBe(2);
  expect(doubleLinkedList2.head.prev).toBeNull();
  expect(doubleLinkedList2.head.val).toBe(1);
  expect(doubleLinkedList2.head.next.val).toBe(3);
  expect(doubleLinkedList2.tail.prev.val).toBe(1);
  expect(doubleLinkedList2.tail.val).toBe(3);
  expect(doubleLinkedList2.tail.next).toBeNull();

  const doubleLinkedList3 = new DoubleLinkedList();

  doubleLinkedList3.from([1, 2, 3]);

  removeNode = doubleLinkedList3.removeAt(2);

  expect(removeNode.val).toBe(3);
  expect(doubleLinkedList3.head.prev).toBeNull();
  expect(doubleLinkedList3.head.val).toBe(1);
  expect(doubleLinkedList3.head.next.val).toBe(2);
  expect(doubleLinkedList3.tail.prev.val).toBe(1);
  expect(doubleLinkedList3.tail.val).toBe(2);
  expect(doubleLinkedList3.tail.next).toBeNull();

  const doubleLinkedList4 = new DoubleLinkedList();

  doubleLinkedList4.from([1]);

  doubleLinkedList4.removeAt(0);

  expect(doubleLinkedList4.head).toBeNull();
  expect(doubleLinkedList4.tail).toBeNull();
});

test("remove", () => {
  const doubleLinkedList = new DoubleLinkedList();

  doubleLinkedList.from([1, 2, 3]);

  let removeNode = doubleLinkedList.remove(1);

  expect(removeNode.val).toBe(1);
  expect(doubleLinkedList.head.prev).toBeNull();
  expect(doubleLinkedList.head.val).toBe(2);
  expect(doubleLinkedList.head.next.val).toBe(3);
  expect(doubleLinkedList.tail.prev.val).toBe(2);
  expect(doubleLinkedList.tail.val).toBe(3);
  expect(doubleLinkedList.tail.next).toBeNull();

  const doubleLinkedList2 = new DoubleLinkedList();

  doubleLinkedList2.from([1, 2, 3]);

  removeNode = doubleLinkedList2.remove(2);

  expect(removeNode.val).toBe(2);
  expect(doubleLinkedList2.head.prev).toBeNull();
  expect(doubleLinkedList2.head.val).toBe(1);
  expect(doubleLinkedList2.head.next.val).toBe(3);
  expect(doubleLinkedList2.tail.prev.val).toBe(1);
  expect(doubleLinkedList2.tail.val).toBe(3);
  expect(doubleLinkedList2.tail.next).toBeNull();

  const doubleLinkedList3 = new DoubleLinkedList();

  doubleLinkedList3.from([1, 2, 3]);

  removeNode = doubleLinkedList3.remove(3);

  expect(removeNode.val).toBe(3);
  expect(doubleLinkedList3.head.prev).toBeNull();
  expect(doubleLinkedList3.head.val).toBe(1);
  expect(doubleLinkedList3.head.next.val).toBe(2);
  expect(doubleLinkedList3.tail.prev.val).toBe(1);
  expect(doubleLinkedList3.tail.val).toBe(2);
  expect(doubleLinkedList3.tail.next).toBeNull();
});

test("constructor", () => {
  const doubleLinkedList = new DoubleLinkedList();

  expect(doubleLinkedList.head).toBeNull();
  expect(doubleLinkedList.tail).toBeNull();
  expect(doubleLinkedList.count).toBe(0);

  doubleLinkedList.from([1, 2, 3, 4, 5]);

  expect(doubleLinkedList.head.val).toBe(1);
  expect(doubleLinkedList.head.next.val).toBe(2);
  expect(doubleLinkedList.tail.prev.val).toBe(4);
  expect(doubleLinkedList.tail.val).toBe(5);
  expect(doubleLinkedList.count).toBe(5);
});

const DoubleNode = require("../DoubleNode");

test("constructor", () => {
  /**
   * 测试 数值
   */
  let node = new DoubleNode(1);
  expect(node.val).toBe(1);
  expect(node.next).toBeNull();

  /**
   * 测试 对象
   */
  node = new DoubleNode({ a: 1, b: 2 });
  expect(node.val.a).toBe(1);
  expect(node.next).toBeNull();

  /**
   * 测试 next prev
   */

  const node3 = new DoubleNode(3);
  const node2 = new DoubleNode(2);
  const node1 = new DoubleNode(1, node2, node3);

  expect(node1.prev.prev).toBeNull();
  expect(node1.prev.val).toBe(3);
  expect(node1.next.val).toBe(2);
  expect(node1.next.next).toBeNull();
});

test("toString", () => {
  const node = new DoubleNode(1);
  expect(node.toString()).toBe("1");

  const node2 = new DoubleNode({ a: 1, b: 2 });
  expect(node2.toString()).toBe("[object Object]");
});

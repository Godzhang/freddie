const Node = require("../Node");

test("constructor", () => {
  /**
   * 测试 数值
   */
  let node = new Node(1);
  expect(node.val).toBe(1);
  expect(node.next).toBeNull();

  /**
   * 测试 对象
   */
  node = new Node({ a: 1, b: 2 });
  expect(node.val.a).toBe(1);
  expect(node.next).toBeNull();

  /**
   * 测试 next
   */

  const node2 = new Node(2);
  const node1 = new Node(1, node2);
  expect(node1.next.val).toBe(2);
  expect(node1.next.next).toBeNull();
});

test("toString", () => {
  const node = new Node(1);
  expect(node.toString()).toBe("1");

  const node2 = new Node({ a: 1, b: 2 });
  expect(node2.toString()).toBe("[object Object]");
});

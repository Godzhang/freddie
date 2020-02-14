const TreeNode = require("../TreeNode");

test("constructor", () => {
  let node = new TreeNode(1);

  expect(node.val).toBe(1);
  expect(node.left).toBeNull();
  expect(node.right).toBeNull();

  let left = new TreeNode(2);
  let right = new TreeNode(3);
  node.left = left;
  node.right = right;

  expect(node.val).toBe(1);
  expect(node.left.val).toBe(2);
  expect(node.right.val).toBe(3);
});

test("toString", () => {
  let node = new TreeNode(1);

  expect(node.toString()).toBe("1");
});

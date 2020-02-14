const BinarySearchTree = require("../BinarySearchTree");

test("constructor", () => {
  const binarySearchTree = new BinarySearchTree();

  expect(binarySearchTree.root).toBeNull();
});

test("insert", () => {
  const binarySearchTree = new BinarySearchTree();

  binarySearchTree.insert(10);

  expect(binarySearchTree.root.val).toBe(10);

  binarySearchTree.insert(8);
  binarySearchTree.insert(14);

  expect(binarySearchTree.root.left.val).toBe(8);
  expect(binarySearchTree.root.right.val).toBe(14);

  binarySearchTree.insert(20);

  expect(binarySearchTree.root.left.left).toBeNull();
  expect(binarySearchTree.root.left.right).toBeNull();
  expect(binarySearchTree.root.right.left).toBeNull();
  expect(binarySearchTree.root.right.right.val).toBe(20);
});

test("preOrderTraverse", () => {
  const binarySearchTree = new BinarySearchTree();

  binarySearchTree.insert(11);
  binarySearchTree.insert(7);
  binarySearchTree.insert(15);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(9);
  binarySearchTree.insert(8);

  const treeNodes = [];
  binarySearchTree.preOrderTraverse(val => treeNodes.push(val));

  expect(treeNodes).toEqual([11, 7, 5, 3, 9, 8, 15]);
});

test("inOrderTraverse", () => {
  const binarySearchTree = new BinarySearchTree();

  binarySearchTree.insert(11);
  binarySearchTree.insert(7);
  binarySearchTree.insert(15);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(9);
  binarySearchTree.insert(8);

  const treeNodes = [];
  binarySearchTree.inOrderTraverse(val => treeNodes.push(val));

  expect(treeNodes).toEqual([3, 5, 7, 8, 9, 11, 15]);
});

test("postOrderTraverse", () => {
  const binarySearchTree = new BinarySearchTree();

  binarySearchTree.insert(11);
  binarySearchTree.insert(7);
  binarySearchTree.insert(15);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(9);
  binarySearchTree.insert(8);

  const treeNodes = [];
  binarySearchTree.postOrderTraverse(val => treeNodes.push(val));

  expect(treeNodes).toEqual([3, 5, 8, 9, 7, 15, 11]);
});

test("search", () => {
  const binarySearchTree = new BinarySearchTree();

  binarySearchTree.insert(11);
  binarySearchTree.insert(7);
  binarySearchTree.insert(15);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(9);
  binarySearchTree.insert(8);

  expect(binarySearchTree.search(5)).toBeTruthy();
  expect(binarySearchTree.search(10)).toBeFalsy();
});

test("searchNode", () => {
  const binarySearchTree = new BinarySearchTree();

  binarySearchTree.insert(11);
  binarySearchTree.insert(7);
  binarySearchTree.insert(15);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(9);
  binarySearchTree.insert(8);
  binarySearchTree.insert(12);
  binarySearchTree.insert(18);

  expect(
    binarySearchTree.searchNode(binarySearchTree.root.left, 8)
  ).toBeTruthy();
  expect(
    binarySearchTree.searchNode(binarySearchTree.root.left, 15)
  ).toBeFalsy();
  expect(
    binarySearchTree.searchNode(binarySearchTree.root.right, 3)
  ).toBeFalsy();
  expect(
    binarySearchTree.searchNode(binarySearchTree.root.right, 12)
  ).toBeTruthy();
});

test("min", () => {
  const binarySearchTree = new BinarySearchTree();

  expect(binarySearchTree.min()).toBeNull();

  binarySearchTree.insert(11);
  binarySearchTree.insert(7);
  binarySearchTree.insert(15);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(9);
  binarySearchTree.insert(8);

  expect(binarySearchTree.min().val).toBe(3);
});

test("max", () => {
  const binarySearchTree = new BinarySearchTree();

  expect(binarySearchTree.max()).toBeNull();

  binarySearchTree.insert(11);
  binarySearchTree.insert(7);
  binarySearchTree.insert(15);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(9);
  binarySearchTree.insert(8);

  expect(binarySearchTree.max().val).toBe(15);
});

test("minNode", () => {
  const binarySearchTree = new BinarySearchTree();

  binarySearchTree.insert(11);
  binarySearchTree.insert(7);
  binarySearchTree.insert(15);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(9);
  binarySearchTree.insert(8);

  expect(binarySearchTree.minNode(binarySearchTree.root.right).val).toBe(15);
});

test("maxNode", () => {
  const binarySearchTree = new BinarySearchTree();

  binarySearchTree.insert(11);
  binarySearchTree.insert(7);
  binarySearchTree.insert(15);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(9);
  binarySearchTree.insert(8);

  expect(binarySearchTree.maxNode(binarySearchTree.root.left).val).toBe(9);
});

test("toString", () => {
  const binarySearchTree = new BinarySearchTree();

  binarySearchTree.insert(11);
  binarySearchTree.insert(7);
  binarySearchTree.insert(15);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(9);
  binarySearchTree.insert(8);

  expect(binarySearchTree.toString()).toBe("3,5,7,8,9,11,15");
  expect(binarySearchTree.toString("preOrderTraverse")).toBe("11,7,5,3,9,8,15");
  expect(binarySearchTree.toString("postOrderTraverse")).toBe(
    "3,5,8,9,7,15,11"
  );
});

test("remove", () => {
  const binarySearchTree = new BinarySearchTree();

  binarySearchTree.insert(11);
  binarySearchTree.insert(7);
  binarySearchTree.insert(15);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(9);
  binarySearchTree.insert(8);
  binarySearchTree.insert(10);
  binarySearchTree.insert(13);
  binarySearchTree.insert(12);
  binarySearchTree.insert(14);
  binarySearchTree.insert(20);
  binarySearchTree.insert(18);
  binarySearchTree.insert(25);

  // 删除叶子结点
  binarySearchTree.remove(12);
  expect(binarySearchTree.toString()).toBe("3,5,7,8,9,10,11,13,14,15,18,20,25");

  // 删除只有左子结点的结点;
  binarySearchTree.remove(5);
  expect(binarySearchTree.toString()).toBe("3,7,8,9,10,11,13,14,15,18,20,25");

  // 删除只有右子结点的结点
  binarySearchTree.remove(13);
  expect(binarySearchTree.toString()).toBe("3,7,8,9,10,11,14,15,18,20,25");

  // 删除有2个子结点的结点，不是根结点
  binarySearchTree.remove(7);
  expect(binarySearchTree.toString()).toBe("3,8,9,10,11,14,15,18,20,25");

  // 删除根结点
  binarySearchTree.remove(11);
  expect(binarySearchTree.toString()).toBe("3,8,9,10,14,15,18,20,25");

  // 删除不存在的结点
  binarySearchTree.remove(21);
  expect(binarySearchTree.toString()).toBe("3,8,9,10,14,15,18,20,25");
});

test("from", () => {
  const binarySearchTree = BinarySearchTree.from([
    11,
    7,
    15,
    5,
    3,
    9,
    8,
    10,
    13,
    12,
    14,
    20,
    18,
    25,
    6
  ]);

  expect(binarySearchTree.toString()).toBe(
    "3,5,6,7,8,9,10,11,12,13,14,15,18,20,25"
  );
});

test("preOrderTraverseByStack", () => {
  const binarySearchTree = new BinarySearchTree();

  binarySearchTree.insert(11);
  binarySearchTree.insert(7);
  binarySearchTree.insert(15);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(9);
  binarySearchTree.insert(8);

  const arr = [];
  binarySearchTree.preOrderTraverseByStack(val => arr.push(val));
  expect(arr).toEqual([11, 7, 5, 3, 9, 8, 15]);
});

test("inOrderTraverseByStack", () => {
  const binarySearchTree = new BinarySearchTree();

  binarySearchTree.insert(11);
  binarySearchTree.insert(7);
  binarySearchTree.insert(15);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(9);
  binarySearchTree.insert(8);

  const arr = [];
  binarySearchTree.inOrderTraverseByStack(val => arr.push(val));
  expect(arr).toEqual([3, 5, 7, 8, 9, 11, 15]);
});

test("postOrderTraverseStack", () => {
  const binarySearchTree = new BinarySearchTree();

  binarySearchTree.insert(11);
  binarySearchTree.insert(7);
  binarySearchTree.insert(15);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(6);
  binarySearchTree.insert(9);
  binarySearchTree.insert(8);
  binarySearchTree.insert(10);

  const arr = [];
  binarySearchTree.postOrderTraverseStack(val => arr.push(val));
  expect(arr).toEqual([3, 6, 5, 8, 10, 9, 7, 15, 11]);
});

test("breadthFirstTraverse", () => {
  const binarySearchTree = new BinarySearchTree();

  binarySearchTree.insert(11);
  binarySearchTree.insert(7);
  binarySearchTree.insert(15);
  binarySearchTree.insert(5);
  binarySearchTree.insert(3);
  binarySearchTree.insert(6);
  binarySearchTree.insert(9);
  binarySearchTree.insert(8);
  binarySearchTree.insert(10);

  const arr = [];
  binarySearchTree.breadthFirstTraverse(val => arr.push(val));
  expect(arr).toEqual([11, 7, 15, 5, 9, 3, 6, 8, 10]);
});

const TreeNode = require("../TreeNode");
const AVLTree = require("../AVLTree");

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
};

test("constructor", () => {
  const avlTree = new AVLTree();

  expect(avlTree.root).toBeNull();
});

test("getNodeHeight", () => {
  const avlTree = new AVLTree();

  expect(avlTree.getNodeHeight()).toBe(-1);

  avlTree.root = new TreeNode(50);
  expect(avlTree.getNodeHeight(avlTree.root)).toBe(0);

  avlTree.root.left = new TreeNode(30);
  avlTree.root.right = new TreeNode(70);
  expect(avlTree.getNodeHeight(avlTree.root)).toBe(1);

  avlTree.root.left.left = new TreeNode(20);
  avlTree.root.left.left.left = new TreeNode(10);
  expect(avlTree.getNodeHeight(avlTree.root)).toBe(3);
});

test("getBalanceFactor", () => {
  const avlTree = new AVLTree();

  avlTree.root = new TreeNode(50);
  expect(avlTree.getBalanceFactor(avlTree.root)).toBe(BalanceFactor.BALANCED);

  avlTree.root.left = new TreeNode(30);
  expect(avlTree.getBalanceFactor(avlTree.root)).toBe(
    BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
  );

  avlTree.root.right = new TreeNode(70);
  expect(avlTree.getBalanceFactor(avlTree.root)).toBe(BalanceFactor.BALANCED);

  avlTree.root.right.left = new TreeNode(60);
  expect(avlTree.getBalanceFactor(avlTree.root)).toBe(
    BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
  );

  avlTree.root.right.left.left = new TreeNode(55);
  expect(avlTree.getBalanceFactor(avlTree.root)).toBe(
    BalanceFactor.UNBALANCED_RIGHT
  );
});

test("rotationLL", () => {
  const avlTree = new AVLTree();

  avlTree.root = new TreeNode(50);
  avlTree.root.left = new TreeNode(30);
  avlTree.root.right = new TreeNode(70);
  avlTree.root.left.left = new TreeNode(10);
  avlTree.root.left.right = new TreeNode(40);
  avlTree.root.left.left.left = new TreeNode(5);

  expect(avlTree.toString("preOrderTraverse")).toBe("50,30,10,5,40,70");

  avlTree.root = avlTree.rotationLL(avlTree.root);
  expect(avlTree.toString("preOrderTraverse")).toBe("30,10,5,50,40,70");
});

test("rotationRR", () => {
  const avlTree = new AVLTree();

  avlTree.root = new TreeNode(50);
  avlTree.root.left = new TreeNode(30);
  avlTree.root.right = new TreeNode(70);
  avlTree.root.right.left = new TreeNode(60);
  avlTree.root.right.right = new TreeNode(80);
  avlTree.root.right.right.right = new TreeNode(90);

  expect(avlTree.toString("preOrderTraverse")).toBe("50,30,70,60,80,90");

  avlTree.root = avlTree.rotationRR(avlTree.root);
  expect(avlTree.toString("preOrderTraverse")).toBe("70,50,30,60,80,90");
});

test("rotationLR", () => {
  const avlTree = new AVLTree();

  avlTree.root = new TreeNode(50);
  avlTree.root.left = new TreeNode(30);
  avlTree.root.right = new TreeNode(70);
  avlTree.root.left.left = new TreeNode(10);
  avlTree.root.left.right = new TreeNode(40);
  avlTree.root.left.right.left = new TreeNode(35);

  expect(avlTree.toString("preOrderTraverse")).toBe("50,30,10,40,35,70");

  avlTree.root = avlTree.rotationLR(avlTree.root);
  expect(avlTree.toString("preOrderTraverse")).toBe("40,30,10,35,50,70");
});

test("rotationRL", () => {
  const avlTree = new AVLTree();

  avlTree.root = new TreeNode(70);
  avlTree.root.left = new TreeNode(50);
  avlTree.root.right = new TreeNode(80);
  avlTree.root.right.left = new TreeNode(72);
  avlTree.root.right.right = new TreeNode(90);
  avlTree.root.right.left.right = new TreeNode(75);

  expect(avlTree.toString("preOrderTraverse")).toBe("70,50,80,72,75,90");

  avlTree.root = avlTree.rotationRL(avlTree.root);
  expect(avlTree.toString("preOrderTraverse")).toBe("72,70,50,80,75,90");
});

test("insert", () => {
  const avlTree = new AVLTree();

  expect(avlTree.root).toBeNull();

  avlTree.insert(50);
  expect(avlTree.toString("preOrderTraverse")).toBe("50");

  avlTree.insert(30);
  expect(avlTree.toString("preOrderTraverse")).toBe("50,30");

  avlTree.insert(20);
  expect(avlTree.toString("preOrderTraverse")).toBe("30,20,50");

  avlTree.insert(10);
  avlTree.insert(25);
  expect(avlTree.toString("preOrderTraverse")).toBe("30,20,10,25,50");

  avlTree.insert(5);
  expect(avlTree.toString("preOrderTraverse")).toBe("20,10,5,30,25,50");

  avlTree.insert(3);
  expect(avlTree.toString("preOrderTraverse")).toBe("20,5,3,10,30,25,50");

  avlTree.insert(24);
  expect(avlTree.toString("preOrderTraverse")).toBe("20,5,3,10,30,25,24,50");

  avlTree.insert(23);
  expect(avlTree.toString("preOrderTraverse")).toBe("20,5,3,10,30,24,23,25,50");
});

test("removeNode", () => {
  const avlTree = new AVLTree();

  avlTree.insert(11);
  avlTree.insert(7);
  avlTree.insert(15);
  avlTree.insert(5);
  avlTree.insert(9);
  avlTree.insert(13);
  avlTree.insert(20);
  avlTree.insert(3);
  avlTree.insert(6);
  avlTree.insert(8);
  avlTree.insert(10);
  avlTree.insert(12);
  avlTree.insert(14);
  avlTree.insert(18);
  avlTree.insert(25);

  expect(avlTree.toString("preOrderTraverse")).toBe(
    "11,7,5,3,6,9,8,10,15,13,12,14,20,18,25"
  );

  avlTree.root = avlTree.removeNode(avlTree.root, 8);
  expect(avlTree.toString("preOrderTraverse")).toBe(
    "11,7,5,3,6,9,10,15,13,12,14,20,18,25"
  );

  avlTree.root = avlTree.removeNode(avlTree.root, 9);
  expect(avlTree.toString("preOrderTraverse")).toBe(
    "11,7,5,3,6,10,15,13,12,14,20,18,25"
  );

  avlTree.root = avlTree.removeNode(avlTree.root, 10);
  expect(avlTree.toString("preOrderTraverse")).toBe(
    "11,5,3,7,6,15,13,12,14,20,18,25"
  );

  avlTree.root = avlTree.removeNode(avlTree.root, 3);
  expect(avlTree.toString("preOrderTraverse")).toBe(
    "11,6,5,7,15,13,12,14,20,18,25"
  );

  avlTree.root = avlTree.removeNode(avlTree.root, 5);
  avlTree.root = avlTree.removeNode(avlTree.root, 7);
  expect(avlTree.toString("preOrderTraverse")).toBe(
    "15,11,6,13,12,14,20,18,25"
  );

  avlTree.root = avlTree.removeNode(avlTree.root, 18);
  avlTree.root = avlTree.removeNode(avlTree.root, 25);
  expect(avlTree.toString("preOrderTraverse")).toBe("13,11,6,12,15,14,20");

  avlTree.root = avlTree.removeNode(avlTree.root, 6);
  avlTree.root = avlTree.removeNode(avlTree.root, 12);
  avlTree.root = avlTree.removeNode(avlTree.root, 11);
  expect(avlTree.toString("preOrderTraverse")).toBe("15,13,14,20");
});

test("from", () => {
  const avlTree = AVLTree.from([50, 30, 70, 10, 40]);

  expect(avlTree.toString("preOrderTraverse")).toBe("50,30,10,40,70");
});

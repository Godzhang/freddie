import Tree, { Node } from "../../code/tree/isValidBST";

test("isValidBST", () => {
  let root = new Tree([2, 1, 3]);
  expect(Tree.walk(root)).toBe(true);
});
test("isValidBST: 2", () => {
  let root = new Node(2);
  root.left = new Node(3);
  root.right = new Node(1);
  expect(Tree.walk(root)).toBe(false);
});

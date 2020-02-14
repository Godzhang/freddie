import lowestCommonAncestor from "../../code/tree/lowestCommonAncestor";
import BinarySearchTree from "../../helper/tree/BinarySearchTree";
import TreeNode from "../../helper/tree/TreeNode";

test("lowestCommonAncestor", () => {
  expect(
    lowestCommonAncestor(
      BinarySearchTree.from([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]).root,
      new TreeNode(2),
      new TreeNode(8)
    ).val
  ).toBe(6);
  expect(
    lowestCommonAncestor(
      BinarySearchTree.from([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]).root,
      new TreeNode(2),
      new TreeNode(4)
    ).val
  ).toBe(2);
});

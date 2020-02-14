import binaryTreePaths from "../../code/tree/binaryTreePaths";
import BinaryTree from "../../helper/tree/BinaryTree";

test("binaryTreePaths", () => {
  expect(binaryTreePaths(BinaryTree.from([1, 2, 3, null, 5])).join()).toMatch(
    /1->3,1->2->5|1->2->5,1->3/
  );
});

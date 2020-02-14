import sortedArrayToBST from "../../code/tree/sortedArrayToBST";
import BinarySearchTree from "../../helper/tree/BinarySearchTree";

test("sortedArrayToBST", () => {
  let binarySearchTree = new BinarySearchTree();
  binarySearchTree.root = sortedArrayToBST([-10, -3, 0, 5, 9]);
  expect(binarySearchTree.toString()).toBe("-10,-3,0,5,9");
});

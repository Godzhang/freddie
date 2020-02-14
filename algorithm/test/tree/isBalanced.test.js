import isBalanced from "../../code/tree/isBalanced";
import BinaryTree from "../../helper/tree/BinaryTree";

test("isBalanced", () => {
  expect(
    isBalanced(BinaryTree.from([3, 9, 20, null, null, 15, 7]))
  ).toBeTruthy();
  expect(
    isBalanced(BinaryTree.from([1, 2, 2, 3, 3, null, null, 4, 4]))
  ).toBeFalsy();
  expect(
    isBalanced(BinaryTree.from([1, 2, 2, 3, null, null, 3, 4, null, null, 4]))
  ).toBeFalsy();
});

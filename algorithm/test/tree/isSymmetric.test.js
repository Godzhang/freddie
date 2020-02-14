import isSymmetric from "../../code/tree/isSymmetric";
import BinaryTree from "../../helper/tree/BinaryTree";

test("isSymmetric", () => {
  expect(isSymmetric(BinaryTree.from([1, 2, 2, 3, 4, 4, 3]))).toBeTruthy();
  expect(isSymmetric(BinaryTree.from([1, 2, 2, null, 3, null, 3]))).toBeFalsy();
});

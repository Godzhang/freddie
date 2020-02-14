import isSameTree from "../../code/tree/isSameTree";
import BinaryTree from "../../helper/tree/BinaryTree";

test("isSameTree", () => {
  let t1 = BinaryTree.from([1, 2, 3]);
  let t2 = BinaryTree.from([1, 2, 3]);
  expect(isSameTree(t1, t2)).toBeTruthy();

  let t3 = BinaryTree.from([1, 2, null]);
  let t4 = BinaryTree.from([1, null, 2]);
  expect(isSameTree(t3, t4)).toBeFalsy();

  let t5 = BinaryTree.from([1, 2, 1]);
  let t6 = BinaryTree.from([1, 1, 2]);
  expect(isSameTree(t5, t6)).toBeFalsy();
});

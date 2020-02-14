import maxDepth from "../../code/tree/maxDepth";
import BinaryTree from "../../helper/tree/BinaryTree";

test("maxDepth", () => {
  expect(maxDepth(BinaryTree.from([null]))).toBe(0);
  expect(maxDepth(BinaryTree.from([3, 9, 20, null, null, 15, 7]))).toBe(3);
});

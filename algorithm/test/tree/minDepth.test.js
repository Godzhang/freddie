import minDepth from "../../code/tree/minDepth";
import BinaryTree from "../../helper/tree/BinaryTree";

test("minDepth", () => {
  expect(minDepth(BinaryTree.from([3, 9, 20, null, null, 15, 7]))).toBe(2);
  expect(minDepth(BinaryTree.from([1, 2]))).toBe(2);
});

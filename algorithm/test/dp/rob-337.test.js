import rob from "../../code/dp/rob-337";
import BinaryTree from "../../helper/tree/BinaryTree";

test("rob", () => {
  expect(rob(BinaryTree.from([3, 2, 3, null, 3, null, 1]))).toBe(7);
  expect(rob(BinaryTree.from([3, 4, 5, 1, 3, null, 1]))).toBe(9);
});

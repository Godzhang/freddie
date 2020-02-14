import sumOfLeftLeaves from "../../code/tree/sumOfLeftLeaves";
import BinaryTree from "../../helper/tree/BinaryTree";

test("sumOfLeftLeaves", () => {
  expect(sumOfLeftLeaves(BinaryTree.from([3, 9, 20, null, null, 15, 7]))).toBe(
    24
  );
  expect(sumOfLeftLeaves(BinaryTree.from([1, 2, 3, 4, 5]))).toBe(4);
});

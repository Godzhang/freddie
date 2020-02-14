import hasPathSum from "../../code/tree/hasPathSum";
import BinaryTree from "../../helper/tree/BinaryTree";

test("hasPathSum", () => {
  expect(
    hasPathSum(
      BinaryTree.from([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]),
      22
    )
  );
});

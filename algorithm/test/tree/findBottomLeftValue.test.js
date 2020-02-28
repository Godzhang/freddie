import findBottomLeftValue from "../../code/tree/findBottomLeftValue";
import BinaryTree from "../../helper/tree/BinaryTree";

test("findBottomLeftValue", () => {
  expect(findBottomLeftValue(BinaryTree.from([2, 1, 3]))).toBe(1);
  expect(
    findBottomLeftValue(
      BinaryTree.from([1, 2, 3, 4, null, 5, 6, null, null, null, null, 7])
    )
  ).toBe(7);
});

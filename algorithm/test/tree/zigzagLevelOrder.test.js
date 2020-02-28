import zigzagLevelOrder from "../../code/tree/zigzagLevelOrder";
import BinaryTree from "../../helper/tree/BinaryTree";

test("zigzagLevelOrder", () => {
  expect(
    zigzagLevelOrder(BinaryTree.from([3, 9, 20, null, null, 15, 7]))
  ).toEqual([[3], [20, 9], [15, 7]]);
});

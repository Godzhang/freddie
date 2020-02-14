import invertTree from "../../code/tree/invertTree";
import BinaryTree from "../../helper/tree/BinaryTree";
import { toString } from "../../helper/tree/utils";

test("invertTree", () => {
  let root = BinaryTree.from([4, 2, 7, 1, 3, 6, 9]);
  let result = invertTree(root);
  expect(toString(result)).toBe("9,7,6,4,3,2,1");
});

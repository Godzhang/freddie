import flatten from "../../code/tree/flatten";
import BinaryTree from "../../helper/tree/BinaryTree";

const toStringOnlyRight = root => {
  const arr = [];
  while (root) {
    arr.push(root.val);
    root = root.right;
  }
  return arr.join();
};

test("flatten", () => {
  let tree = BinaryTree.from([1, 2, 5, 3, 4, null, 6]);
  let head = flatten(tree);
  expect(toStringOnlyRight(head)).toBe("1,2,3,4,5,6");
});

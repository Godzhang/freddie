import getAllElements from "../../code/sort/getAllElements";
import BinarySearchTree from "../../helper/tree/BinarySearchTree";

test("getAllElements", () => {
  expect(
    getAllElements(
      BinarySearchTree.from([2, 1, 4]).root,
      BinarySearchTree.from([1, 0, 3]).root
    )
  ).toEqual([0, 1, 1, 2, 3, 4]);
  expect(
    getAllElements(
      BinarySearchTree.from([0, -10, 10]).root,
      BinarySearchTree.from([5, 1, 7, 0, 2]).root
    )
  ).toEqual([-10, 0, 0, 1, 2, 5, 7, 10]);
  expect(
    getAllElements(
      BinarySearchTree.from([]).root,
      BinarySearchTree.from([5, 1, 7, 0, 2]).root
    )
  ).toEqual([0, 1, 2, 5, 7]);
  expect(
    getAllElements(
      BinarySearchTree.from([0, -10, 10]).root,
      BinarySearchTree.from([]).root
    )
  ).toEqual([-10, 0, 10]);
  expect(
    getAllElements(
      BinarySearchTree.from([1, null, 8]).root,
      BinarySearchTree.from([8, 1]).root
    )
  ).toEqual([1, 1, 8, 8]);
});

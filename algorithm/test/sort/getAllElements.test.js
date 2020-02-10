import getAllElements from "../../code/sort/getAllElements";
import BinarySearchTree from "../../helper/tree/BinarySearchTree";

test("getAllElements", () => {
  expect(
    getAllElements(
      new BinarySearchTree().from([2, 1, 4]),
      new BinarySearchTree().from([1, 0, 3])
    )
  ).toEqual([0, 1, 1, 2, 3, 4]);
  expect(
    getAllElements(
      new BinarySearchTree().from([0, -10, 10]),
      new BinarySearchTree().from([5, 1, 7, 0, 2])
    )
  ).toEqual([-10, 0, 0, 1, 2, 5, 7, 10]);
  expect(
    getAllElements(
      new BinarySearchTree().from([]),
      new BinarySearchTree().from([5, 1, 7, 0, 2])
    )
  ).toEqual([0, 1, 2, 5, 7]);
  expect(
    getAllElements(
      new BinarySearchTree().from([0, -10, 10]),
      new BinarySearchTree().from([])
    )
  ).toEqual([-10, 0, 10]);
  expect(
    getAllElements(
      new BinarySearchTree().from([1, null, 8]),
      new BinarySearchTree().from([8, 1])
    )
  ).toEqual([1, 1, 8, 8]);
});

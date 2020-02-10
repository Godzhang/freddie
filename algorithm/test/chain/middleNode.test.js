import middleNode from "../../code/chain/middleNode";
import { ArrayToLinkedList } from "../../helper/chain/utils";

test("middleNode", () => {
  expect(middleNode(ArrayToLinkedList([1, 2, 3, 4, 5])).val).toBe(3);
  expect(middleNode(ArrayToLinkedList([1, 2, 3, 4, 5, 6])).val).toBe(4);
});

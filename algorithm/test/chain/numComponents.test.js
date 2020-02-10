import numComponents from "../../code/chain/numComponents";
import { ArrayToLinkedList } from "../../helper/chain/utils";

test("numComponents", () => {
  expect(numComponents(ArrayToLinkedList([0, 1, 2, 3]), [0, 1, 3])).toBe(2);
  expect(numComponents(ArrayToLinkedList([0, 1, 2, 3, 4]), [0, 3, 1, 4])).toBe(
    2
  );
});

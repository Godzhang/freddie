import getDecimalValue from "../../code/chain/getDecimalValue";
import { ArrayToLinkedList } from "../../helper/chain/utils";

test("getDecimalValue", () => {
  expect(getDecimalValue(ArrayToLinkedList([1, 0, 1]))).toBe(5);
  expect(getDecimalValue(ArrayToLinkedList([0]))).toBe(0);
  expect(getDecimalValue(ArrayToLinkedList([1]))).toBe(1);
  expect(
    getDecimalValue(
      ArrayToLinkedList([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0])
    )
  ).toBe(18880);
  expect(getDecimalValue(ArrayToLinkedList([0, 0]))).toBe(0);
});

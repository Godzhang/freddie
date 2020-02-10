import isPalindrome from "../../code/chain/isPalindrome";
import { ArrayToLinkedList } from "../../helper/chain/utils";

test("isPalindrome", () => {
  expect(isPalindrome(ArrayToLinkedList([]))).toBeTruthy();
  expect(isPalindrome(ArrayToLinkedList([1]))).toBeTruthy();
  expect(isPalindrome(ArrayToLinkedList([1, 2]))).toBeFalsy();
  expect(isPalindrome(ArrayToLinkedList([1, 2, 2, 1]))).toBeTruthy();
  expect(isPalindrome(ArrayToLinkedList([1, 2, 3, 2, 1]))).toBeTruthy();
});

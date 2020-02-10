import getIntersectionNode from "../../code/chain/getIntersectionNode";
import { ListNode } from "../../helper/chain/utils";

test("getIntersectionNode: 8", () => {
  let headA = new ListNode(4);
  let currA = headA;
  currA.next = new ListNode(1);
  currA = currA.next;

  let headB = new ListNode(5);
  let currB = headB;
  currB.next = new ListNode(0);
  currB = currB.next;
  currB.next = new ListNode(1);
  currB = currB.next;

  let publicNode = new ListNode(8);
  currA.next = publicNode;
  currB.next = publicNode;
  publicNode.next = new ListNode(4);
  publicNode = publicNode.next;
  publicNode.next = new ListNode(5);

  expect(getIntersectionNode(headA, headB).val).toBe(8);
});

test("getIntersectionNode: 1", () => {
  let publicNode = new ListNode(1);
  let headA = publicNode;
  let headB = publicNode;

  expect(getIntersectionNode(headA, headB).val).toBe(1);
});

test("getIntersectionNode: false", () => {
  let headA = new ListNode(4);
  let currA = headA;
  currA.next = new ListNode(1);
  currA = currA.next;
  currA.next = new ListNode(8);
  currA = currA.next;

  let headB = new ListNode(5);
  let currB = headB;
  currB.next = new ListNode(0);
  currB = currB.next;
  currB.next = new ListNode(1);
  currB = currB.next;

  expect(getIntersectionNode(headA, headB)).toBeNull();
});

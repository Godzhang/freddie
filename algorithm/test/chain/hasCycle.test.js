import hasCycle, { NodeList } from "../../code/chain/hasCycle";

test("hasCycle", () => {
  let head = new NodeList([6, 1, 2, 5, 7, 9]);
  head.next.next.next.next.next.next = head.next;
  expect(hasCycle(head)).toBe(true);
});

test("hasCycle：单链表", () => {
  let head = new NodeList([6, 1, 2, 5, 7, 9]);
  expect(hasCycle(head)).toBe(false);
});

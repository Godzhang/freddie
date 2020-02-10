import hasCycle from "../../code/chain/hasCycle";
import { ArrayToLinkedList, makeCircle } from "../../helper/chain/utils";

test("hasCycle", () => {
  let head1 = makeCircle([6, 1, 2, 5, 7, 9]);
  expect(hasCycle(head1)).toBe(true);

  let head2 = ArrayToLinkedList([6, 1, 2, 5, 7, 9]);
  expect(hasCycle(head2)).toBe(false);

  let head3 = ArrayToLinkedList([1]);
  expect(hasCycle(head3)).toBe(false);
});

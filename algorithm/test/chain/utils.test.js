import { makeCircle } from "../../helper/chain/utils";

test("makeCircle", () => {
  let head1 = makeCircle([1, 2, 3, 4, 5], 3);
  expect(head1.next.next.next.next.next.val).toBe(4);

  let head2 = makeCircle([], 1);
  expect(head2).toBeFalsy();

  let head3 = makeCircle([1, 2], 0);
  expect(head3.next.next.val).toBe(1);

  let head4 = makeCircle([1, 2], 1);
  expect(head4).toBeFalsy();

  let head5 = makeCircle([1, 2, 3, 4, 5], 0);
  expect(head5.next.next.next.next.next.val).toBe(1);

  let head6 = makeCircle([1, 2, 3, 4, 5], 8);
  expect(head6.next.next.next.next.next.val).toBe(4);
});

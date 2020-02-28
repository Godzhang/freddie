import { cycleLength, cycleStart } from "../../code/chain/chain";
import { makeCircle } from "../../helper/chain/utils";

test("cycleLength", () => {
  let head = makeCircle([1, 2, 3, 4, 5, 6, 7, 8], 3);
  expect(cycleLength(head)).toBe(5);
});

test("cycleStart", () => {
  let head = makeCircle([1, 2, 3, 4, 5, 6, 7, 8], 3);
  expect(cycleStart(head).val).toBe(4);

  let head1 = makeCircle([1, 2]);
  expect(cycleStart(head1).val).toBe(1);
});

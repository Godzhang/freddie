import detectCycle from "../../code/chain/detectCycle";
import { makeCircle } from "../../helper/chain/utils";

test("detectCycle", () => {
  let head = makeCircle([1, 2, 3, 4, 5, 6, 7, 8], 3);
  expect(detectCycle(head).val).toBe(4);

  let head1 = makeCircle([1, 2]);
  expect(detectCycle(head1).val).toBe(1);
});

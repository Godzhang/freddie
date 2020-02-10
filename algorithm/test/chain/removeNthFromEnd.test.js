import removeNthFromEnd from "../../code/chain/removeNthFromEnd";

import { getStringResult } from "../../helper/chain/utils";

test("removeNthFromEnd", () => {
  expect(getStringResult(removeNthFromEnd, [1, 2, 3, 4, 5], 5)).toBe("2,3,4,5");
  expect(getStringResult(removeNthFromEnd, [1, 2, 3, 4, 5], 2)).toEqual(
    "1,2,3,5"
  );
  expect(getStringResult(removeNthFromEnd, [1, 2, 3, 4, 5], 1)).toBe("1,2,3,4");
  expect(getStringResult(removeNthFromEnd, [1], 1)).toBe("");
});

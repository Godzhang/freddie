import removeElements from "../../code/chain/removeElements";
import { getStringResult } from "../../helper/chain/utils";

test("removeElements", () => {
  expect(getStringResult(removeElements, [1], 1)).toBe("");
  expect(getStringResult(removeElements, [1, 2, 6, 3, 4, 5, 6], 6)).toBe(
    "1,2,3,4,5"
  );
});

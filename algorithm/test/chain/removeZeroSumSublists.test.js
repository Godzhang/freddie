import removeZeroSumSublists from "../../code/chain/removeZeroSumSublists";
import { getStringResult } from "../../helper/chain/utils";

test("removeZeroSumSublists", () => {
  expect(getStringResult(removeZeroSumSublists, [1, 2, -3, 3, 1])).toBe("3,1");
  expect(getStringResult(removeZeroSumSublists, [1, 2, 3, -3, 4])).toBe(
    "1,2,4"
  );
  expect(getStringResult(removeZeroSumSublists, [1, 2, 3, -3, -2])).toBe("1");
});

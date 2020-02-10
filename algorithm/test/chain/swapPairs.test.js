import swapPairs from "../../code/chain/swapPairs";
import { getStringResult } from "../../helper/chain/utils";

test("swapPairs", () => {
  expect(getStringResult(swapPairs, [])).toBe("");
  expect(getStringResult(swapPairs, [1])).toBe("1");
  expect(getStringResult(swapPairs, [1, 2])).toBe("2,1");
  expect(getStringResult(swapPairs, [1, 2, 3])).toBe("2,1,3");
  expect(getStringResult(swapPairs, [1, 2, 3, 4])).toBe("2,1,4,3");
  expect(getStringResult(swapPairs, [1, 2, 3, 4, 5])).toBe("2,1,4,3,5");
});

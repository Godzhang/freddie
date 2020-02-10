import rotateRight from "../../code/chain/rotateRight";
import { getStringResult } from "../../helper/chain/utils";

test("rotateRight", () => {
  expect(getStringResult(rotateRight, [1, 2, 3, 4, 5], 0)).toBe("1,2,3,4,5");
  expect(getStringResult(rotateRight, [1, 2, 3, 4, 5], 1)).toBe("5,1,2,3,4");
  expect(getStringResult(rotateRight, [1, 2, 3, 4, 5], 3)).toBe("3,4,5,1,2");
  expect(getStringResult(rotateRight, [1, 2, 3, 4, 5], 5)).toBe("1,2,3,4,5");
  expect(getStringResult(rotateRight, [], 0)).toBe("");
  expect(getStringResult(rotateRight, [], 1)).toBe("");
});

import reorderList from "../../code/chain/reorderList";
import { getStringResult } from "../../helper/chain/utils";

test("reorderList", () => {
  expect(getStringResult(reorderList, [])).toBe("");
  expect(getStringResult(reorderList, [1])).toBe("1");
  expect(getStringResult(reorderList, [1, 2])).toBe("1,2");
  expect(getStringResult(reorderList, [1, 2, 3, 4])).toBe("1,4,2,3");
  expect(getStringResult(reorderList, [1, 2, 3, 4, 5])).toBe("1,5,2,4,3");
});

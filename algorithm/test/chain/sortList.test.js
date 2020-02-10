import sortList from "../../code/chain/sortList";
import { getStringResult } from "../../helper/chain/utils";

test("sortList", () => {
  expect(getStringResult(sortList, [4, 3])).toBe("3,4");
  expect(getStringResult(sortList, [4, 2, 1])).toBe("1,2,4");
  expect(getStringResult(sortList, [4, 2, 1, 3])).toBe("1,2,3,4");
  expect(getStringResult(sortList, [-1, 5, 3, 4, 0])).toBe("-1,0,3,4,5");
});

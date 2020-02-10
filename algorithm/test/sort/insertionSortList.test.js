import insertionSortList from "../../code/sort/insertionSortList";
import { getStringResult } from "../../helper/chain/utils";

test("insertionSortList", () => {
  expect(getStringResult(insertionSortList, [4, 2, 1, 3])).toBe("1,2,3,4");
  expect(getStringResult(insertionSortList, [-1, 5, 3, 4, 0])).toBe(
    "-1,0,3,4,5"
  );
});

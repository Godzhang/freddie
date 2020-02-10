import reverseList from "../../code/chain/reverseList";
import { getStringResult } from "../../helper/chain/utils";

test("reverseList", () => {
  expect(getStringResult(reverseList, [1, 2, 3, 4, 5])).toBe("5,4,3,2,1");
});

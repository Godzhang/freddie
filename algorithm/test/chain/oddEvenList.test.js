import oddEvenList from "../../code/chain/oddEvenList";
import { getStringResult } from "../../helper/chain/utils";

test("oddEvenList", () => {
  expect(getStringResult(oddEvenList, [1, 2, 3, 4, 5])).toBe("1,3,5,2,4");
  expect(getStringResult(oddEvenList, [2, 1, 3, 5, 6, 4, 7])).toBe(
    "2,3,6,7,1,5,4"
  );
});

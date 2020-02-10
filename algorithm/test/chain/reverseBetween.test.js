import reverseBetween from "../../code/chain/reverseBetween";
import { getStringResult } from "../../helper/chain/utils";

test("reverseBetween", () => {
  expect(getStringResult(reverseBetween, [1], 1, 1)).toBe("1");
  expect(getStringResult(reverseBetween, [1, 2], 1, 2)).toBe("2,1");
  expect(getStringResult(reverseBetween, [1, 2, 3, 4, 5], 2, 4)).toBe(
    "1,4,3,2,5"
  );
  expect(getStringResult(reverseBetween, [1, 2, 3, 4, 5], 1, 5)).toBe(
    "5,4,3,2,1"
  );
});

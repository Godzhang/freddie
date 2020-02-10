import partition from "../../code/chain/partition";
import { getStringResult } from "../../helper/chain/utils";

test("partition", () => {
  expect(getStringResult(partition, [1], 2)).toBe("1");
  expect(getStringResult(partition, [1, 4, 3, 2, 5, 2], 1)).toBe("1,4,3,2,5,2");
  expect(getStringResult(partition, [1, 4, 3, 2, 5, 2], 3)).toBe("1,2,2,4,3,5");
  expect(getStringResult(partition, [1, 4, 3, 2, 5, 2], 5)).toBe("1,4,3,2,2,5");
});

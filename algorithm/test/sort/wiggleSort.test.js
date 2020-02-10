import wiggleSort from "../../code/sort/wiggleSort";

// 本题答案有多种可能，此处只按当前当前代码段为准
test("wiggleSort", () => {
  expect(wiggleSort([1, 5, 1, 1, 6, 4])).toEqual([1, 4, 1, 5, 1, 6]);
  expect(wiggleSort([1, 3, 2, 2, 3, 1])).toEqual([1, 2, 1, 3, 2, 3]);
});

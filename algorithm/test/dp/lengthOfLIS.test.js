import lengthOfLIS from "../../code/dp/lengthOfLIS";

test("lengthOfLIS", () => {
  expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
  expect(lengthOfLIS([1, 2, 3, 4, 5, 1, 2, 10])).toBe(6);
  expect(lengthOfLIS([2, 2])).toBe(1);
});

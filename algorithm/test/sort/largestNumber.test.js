import largestNumber from "../../code/sort/largestNumber";

test("largestNumber", () => {
  expect(largestNumber([0])).toBe("0");
  expect(largestNumber([20, 1])).toBe("201");
  expect(largestNumber([10, 2])).toBe("210");
  expect(largestNumber([3, 30, 34, 5, 9])).toBe("9534330");
  expect(largestNumber([54345643, 54345644])).toBe("5434564454345643");
});

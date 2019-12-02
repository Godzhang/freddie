import productExceptSelf from "../../code/array/productExceptSelf";

test("productExceptSelf", () => {
  expect(productExceptSelf([1, 2])).toEqual([2, 1]);
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

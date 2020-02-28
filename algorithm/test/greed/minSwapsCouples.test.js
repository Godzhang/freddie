import minSwapsCouples from "../../code/greed/minSwapsCouples";

test("minSwapsCouples", () => {
  expect(minSwapsCouples([0, 2, 1, 3])).toBe(1);
  expect(minSwapsCouples([3, 2, 0, 1])).toBe(0);
  expect(minSwapsCouples([0, 4, 3, 2, 5, 1])).toBe(1);
});

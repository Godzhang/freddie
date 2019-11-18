import canPlaceFlowers from "../../code/array/canPlaceFlowers";

test("canPlaceFlowers", () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
  expect(canPlaceFlowers([1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1], 3)).toBe(
    true
  );
  expect(canPlaceFlowers([1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1], 4)).toBe(
    false
  );
  expect(canPlaceFlowers([1, 0, 0, 0, 1, 0, 1, 0, 0], 2)).toBe(true);
});

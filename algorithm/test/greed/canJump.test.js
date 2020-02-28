import canJump from "../../code/greed/canJump";

test("canJump", () => {
  expect(canJump([2, 3, 1, 1, 4])).toBeTruthy();
  expect(canJump([3, 2, 1, 0, 4])).toBeFalsy();
  expect(canJump([3, 0, 2, 0, 4])).toBeTruthy();
});

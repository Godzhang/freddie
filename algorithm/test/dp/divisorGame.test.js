import divisorGame from "../../code/dp/divisorGame";

test("divisorGame", () => {
  expect(divisorGame(1)).toBeFalsy();
  expect(divisorGame(2)).toBeTruthy();
  expect(divisorGame(3)).toBeFalsy();
  expect(divisorGame(4)).toBeTruthy();
  expect(divisorGame(5)).toBeFalsy();
  expect(divisorGame(6)).toBeTruthy();
  expect(divisorGame(9)).toBeFalsy();
  expect(divisorGame(10)).toBeTruthy();
});

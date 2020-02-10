import validateStackSequences from "../../code/stack/validateStackSequences";

test("validateStackSequences", () => {
  expect(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])).toBe(true);
  expect(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])).toBe(false);
});

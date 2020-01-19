import backspaceCompare from "../../code/stack/backspaceCompare";

test("backspaceCompare", () => {
  expect(backspaceCompare("ab#c", "ad#c")).toBe(true);
  expect(backspaceCompare("ab##", "c#d#")).toBe(true);
  expect(backspaceCompare("a##c", "#a#c")).toBe(true);
  expect(backspaceCompare("a#c", "b")).toBe(false);
  expect(backspaceCompare("y#fo##f", "y#f#o##f")).toBe(true);
  expect(backspaceCompare("c##vnvr", "#c##vnvr")).toBe(true);
});

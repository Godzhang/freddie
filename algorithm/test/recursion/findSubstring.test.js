import findSubstring from "../../code/recursion/findSubstring";

test("findSubstring", () => {
  expect(findSubstring("barfoothefoobarman", ["foo", "bar"])).toEqual([0, 9]);
  expect(
    findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
  ).toEqual([]);
});

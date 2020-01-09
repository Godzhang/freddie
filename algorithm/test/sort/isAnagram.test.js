import isAnagram from "../../code/sort/isAnagram";

test("isAnagram", () => {
  expect(isAnagram("anagram", "nagaram")).toBe(true);
  expect(isAnagram("rat", "car")).toBe(false);
  expect(isAnagram("ac", "bb")).toBe(false);
});

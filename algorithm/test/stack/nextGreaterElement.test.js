import nextGreaterElement from "../../code/stack/nextGreaterElement";

test("nextGreaterElement", () => {
  expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1]);
  expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toEqual([3, -1]);
  expect(
    nextGreaterElement(
      [137, 59, 92, 122, 52, 131, 79, 236, 94, 171, 141],
      [137, 59, 92, 122, 52, 131, 79, 236, 94, 171, 141]
    )
  ).toEqual([236, 92, 122, 131, 131, 236, 236, -1, 171, -1, -1]);
});

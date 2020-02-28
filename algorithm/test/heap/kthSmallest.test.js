import kthSmallest from "../../code/heap/kthSmallest";

test("kthSmallest", () => {
  expect(
    kthSmallest(
      [
        [1, 5, 9],
        [10, 11, 13],
        [12, 13, 15]
      ],
      8
    )
  ).toBe(13);
});

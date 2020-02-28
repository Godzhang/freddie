import KthLargest from "../../code/heap/KthLargest";

test("KthLargest", () => {
  let k = 3;
  let arr = [4, 5, 8, 2];
  let kthLargest = new KthLargest(k, arr);
  expect(kthLargest.add(3)).toBe(4);
  expect(kthLargest.add(5)).toBe(5);
  expect(kthLargest.add(10)).toBe(5);
  expect(kthLargest.add(9)).toBe(8);
  expect(kthLargest.add(4)).toBe(8);
});

test("KthLargest: 2", () => {
  let k = 2;
  let arr = [0];
  let kthLargest = new KthLargest(k, arr);
  expect(kthLargest.add(-1)).toBe(-1);
  expect(kthLargest.add(1)).toBe(0);
  expect(kthLargest.add(-2)).toBe(0);
  expect(kthLargest.add(-4)).toBe(0);
  expect(kthLargest.add(3)).toBe(1);
});

import Heap from "../../code/heap/frequencySort";

test("Heap", () => {
  let heap = new Heap("chcaa");
  expect(heap.toString()).toMatch(/ccaah|aacch/);
});

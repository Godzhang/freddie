import frequencySort from "../../code/heap/frequencySort";

test("frequencySort", () => {
  // let heap = new Heap("chcaa");
  // expect(heap.toString()).toMatch(/ccaah|aacch/);

  expect(frequencySort("chcaa")).toMatch(/ccaah|aacch/);
});

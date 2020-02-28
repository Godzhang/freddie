import partitionLabels from "../../code/greed/partitionLabels";

test("partitionLabels", () => {
  expect(partitionLabels("ababcbacadefegdehijhklij")).toEqual([9, 7, 8]);
  expect(partitionLabels("aaaaaaa")).toEqual([7]);
});

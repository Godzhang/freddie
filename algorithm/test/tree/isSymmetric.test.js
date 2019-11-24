import Tree from "../../code/tree/isSymmetric";

test("isSymmetric", () => {
  let root = new Tree([1, 2, 2, 3, 4, 4, 3]);
  expect(Tree.isSymmetry(root)).toBe(true);
});

test("isSymmetric: 2", () => {
  let root = new Tree([1, 2, 2, null, 3, null, 3]);
  expect(Tree.isSymmetry(root)).toBe(false);
});

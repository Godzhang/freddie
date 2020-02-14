// const lowestCommonAncestor = (root, p, q) => {
//   let tmp = root.val;
//   let pVal = p.val;
//   let qVal = q.val;
//   if (pVal < tmp && qVal < tmp) {
//     return lowestCommonAncestor(root.left, p, q);
//   } else if (pVal > tmp && qVal > tmp) {
//     return lowestCommonAncestor(root.right, p, q);
//   } else {
//     return root;
//   }
// };

// export default lowestCommonAncestor;

export default (root, p, q) => {
  let pVal = p.val;
  let qVal = q.val;
  while (root) {
    if (pVal < root.val && qVal < root.val) {
      root = root.left;
    } else if (pVal > root.val && qVal > root.val) {
      root = root.right;
    } else {
      return root;
    }
  }
};

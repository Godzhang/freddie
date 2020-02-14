// export default (root, sum) => {
//   if (!root) return false;
//   const helper = (node, total) => {
//     if (!node) return false;
//     total += node.val;
//     if (!node.left && !node.right) return total === sum;
//     return helper(node.left, total) || helper(node.right, total);
//   };
//   return helper(root, 0);
// };

// export default (root, sum) => {
//   if (!root) return false;

//   const stack = [[root, sum - root.val]];

//   while (stack.length) {
//     let [node, remainSum] = stack.pop();
//     if (!node.left && !node.right && remainSum === 0) {
//       return true;
//     }
//     if (node.left) {
//       stack.push([node.left, remainSum - node.left.val]);
//     }
//     if (node.right) {
//       stack.push([node.right, remainSum - node.right.val]);
//     }
//   }

//   return false;
// };

const hasPathSum = (root, sum) => {
  if (root == null) {
    return false;
  }
  if (root.left == null && root.right == null && root.val == sum) {
    return true;
  }
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};

export default hasPathSum;

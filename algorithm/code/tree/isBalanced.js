// const isBalanced = root => {
//   if (!root) return true;
//   const getNodeHeight = node => {
//     if (!node) return -1;
//     return Math.max(getNodeHeight(node.left), getNodeHeight(node.right)) + 1;
//   };
//   return (
//     isBalanced(root.left) &&
//     isBalanced(root.right) &&
//     Math.abs(getNodeHeight(root.left) - getNodeHeight(root.right)) <= 1
//   );
// };

// export default isBalanced;

// export default root => {
//   const isBalancedHelper = node => {
//     if (!node) {
//       return 0;
//     }
//     let left = isBalancedHelper(node.left);
//     if (left === -1) {
//       return -1;
//     }
//     let right = isBalancedHelper(node.right);
//     if (right === -1) {
//       return -1;
//     }
//     return Math.abs(left - right) <= 1 ? Math.max(left, right) + 1 : -1;
//   };
//   return isBalancedHelper(root) !== -1;
// };

const isBalanced = root => {
  const getHeight = node => {
    if (!node) {
      return -1;
    }
    if ("status" in node) return node.status;
    let height = Math.max(getHeight(node.left), getHeight(node.right)) + 1;
    node.status = height;
    return height;
  };

  if (!root) return true;

  return (
    Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};

export default isBalanced;

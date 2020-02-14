/**
 * 递归
 * time: O(n)
 * space: O(logn) ~ O(n)
 */
// const maxDepth = root => {
//   if (!root) {
//     return 0;
//   } else {
//     let leftHeight = maxDepth(root.left);
//     let rightHeight = maxDepth(root.right);
//     return Math.max(leftHeight, rightHeight) + 1;
//   }
// };

// export default maxDepth;

/**
 * BFS 层次遍历
 */
// export default root => {
//   if (!root) return 0;
//   const queue = [root];
//   let count = 0;

//   while (queue.length) {
//     count++;
//     for (let i = 0, len = queue.length; i < len; i++) {
//       let node = queue.shift();
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//   }

//   return count;
// };

/**
 * DFS 前序遍历
 */
export default root => {
  if (!root) return 0;
  let maxDepth = 0;
  const stack = [[root, 1]];

  while (stack.length) {
    let [n, c] = stack.pop();
    maxDepth = Math.max(maxDepth, c);
    if (n.right) {
      stack.push([n.right, c + 1]);
    }
    if (n.left) {
      stack.push([n.left, c + 1]);
    }
  }

  return maxDepth;
};

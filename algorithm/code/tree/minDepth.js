/**
 * time: O(n)
 * space: O(n)
 */
// export default root => {
//   if (!root) return 0;
//   const queue = [root];
//   let minHeight = 0;

//   while (queue.length) {
//     minHeight++;
//     for (let i = 0, len = queue.length; i < len; i++) {
//       let node = queue.shift();
//       if (!node.left && !node.right) {
//         return minHeight;
//       }
//       if (node.left) {
//         queue.push(node.left);
//       }
//       if (node.right) {
//         queue.push(node.right);
//       }
//     }
//   }
// };

const minDepth = root => {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  let min = Number.MAX_SAFE_INTEGER;

  if (root.left) {
    min = Math.min(minDepth(root.left), min);
  }
  if (root.right) {
    min = Math.min(minDepth(root.right), min);
  }

  return min + 1;
};

export default minDepth;

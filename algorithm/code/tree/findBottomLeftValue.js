// export default root => {
//   const queue = [root];
//   let left;

//   while (queue.length) {
//     left = queue[0].val;
//     for (let i = 0, len = queue.length; i < len; i++) {
//       let node = queue.shift();
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//   }

//   return left;
// };

export default root => {
  let left = root.val;
  let max = 0;
  const helper = (node, level) => {
    if (!node.left && !node.right) {
      if (level > max) {
        left = node.val;
        max = level;
      }
    }
    if (node.left) helper(node.left, level + 1);
    if (node.right) helper(node.right, level + 1);
  };
  helper(root, max);
  return left;
};

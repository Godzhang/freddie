/**
 * DFS 递归
 */
// export default root => {
//   if (!root) return [];
//   const result = [];
//   const helper = (node, str) => {
//     if (!node.left && !node.right) {
//       result.push(str);
//       return;
//     }
//     if (node.left) {
//       helper(node.left, `${str}->${node.left.val}`);
//     }
//     if (node.right) {
//       helper(node.right, `${str}->${node.right.val}`);
//     }
//   };
//   helper(root, `${root.val}`);
//   return result;
// };

/**
 * BFS
 */
// export default root => {
//   if (!root) return [];
//   const queue = [[root, `${root.val}`]];
//   const result = [];

//   while (queue.length) {
//     let [node, str] = queue.shift();
//     if (!node.left && !node.right) {
//       result.push(str);
//     } else if (node.left) {
//       queue.push([node.left, `${str}->${node.left.val}`]);
//     }
//     if (node.right) {
//       queue.push([node.right, `${str}->${node.right.val}`]);
//     }
//   }

//   return result;
// };

/**
 * DFS 栈
 */
export default root => {
  if (!root) return [];
  const stack = [];
  const result = [];
  let node = root;
  let str = "";

  while (stack.length || node) {
    while (node) {
      if (node === root) {
        str += node.val;
      } else {
        str += `->${node.val}`;
      }
      stack.push([node, str]);
      node = node.left;
    }
    if (stack.length) {
      [node, str] = stack.pop();
      if (!node.left && !node.right) {
        result.push(str);
      }
      node = node.right;
    }
  }

  return result;
};

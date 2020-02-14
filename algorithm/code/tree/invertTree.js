/**
 * 前序遍历(中序，后序都可实现)
 */
// const invertTree = root => {
//   if (!root) return null;

//   let tmp = root.left;
//   root.left = root.right;
//   root.right = tmp;
//   invertTree(root.left);
//   invertTree(root.right);

//   return root;
// };

// export default invertTree;

/**
 * 层序遍历
 */
// export default root => {
//   if (!root) return null;

//   const reverse = node => {
//     let tmp = node.left;
//     node.left = node.right;
//     node.right = tmp;
//   };

//   const queue = [root];
//   while (queue.length) {
//     for (let i = 0, len = queue.length; i < len; i++) {
//       let node = queue.shift();
//       reverse(node);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//   }

//   return root;
// };

// const invertTree = root => {
//   if (!root) return null;
//   [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
//   return root;
// };

// export default invertTree;

const invertTree = root => {
  if (!root) return null;
  let left = invertTree(root.right);
  let right = invertTree(root.left);
  root.left = left;
  root.right = right;
  return root;
};

export default invertTree;

// export default root => {
//   if (!root) return [];
//   const result = [];
//   const queue = [root];
//   let isFront = true;

//   while (queue.length) {
//     let arr = [];
//     for (let i = 0, len = queue.length; i < len; i++) {
//       let node = queue.shift();
//       if (isFront) {
//         arr.push(node.val);
//       } else {
//         arr.unshift(node.val);
//       }
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     result.push(arr);
//     isFront = !isFront;
//   }

//   return result;
// };

export default root => {
  if (!root) return [];
  const result = [];

  const helper = (node, level) => {
    if (!node) return;

    result[level] = result[level] || [];

    if (level % 2 === 0) {
      result[level].push(node.val);
    } else {
      result[level].unshift(node.val);
    }

    helper(node.left, level + 1);
    helper(node.right, level + 1);
  };
  helper(root, 0);

  return result;
};

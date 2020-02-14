// const sumOfLeftLeaves = root => {
//   let sum = 0;

//   const helper = node => {
//     if (!node) return;
//     if (node.left && !node.left.left && !node.left.right) {
//       sum += node.left.val;
//     }
//     helper(node.left);
//     helper(node.right);
//   };

//   helper(root);
//   return sum;
// };

// export default sumOfLeftLeaves;

export default root => {
  if (!root) return 0;
  const stack = [[root, false]];
  let sum = 0;
  let flag;

  while (stack.length) {
    let nodes = stack.pop();
    let node = nodes[0];
    flag = nodes[1];

    if (flag && !node.left && !node.right) {
      sum += node.val;
    }
    if (node.left) {
      stack.push([node.left, true]);
    }
    if (node.right) {
      stack.push([node.right, false]);
    }
  }

  return sum;
};

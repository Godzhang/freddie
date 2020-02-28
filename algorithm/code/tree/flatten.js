// export default root => {
//   const queue = [];
//   const helper = node => {
//     if (node) {
//       queue.push(node);
//       helper(node.left);
//       helper(node.right);
//     }
//   };
//   helper(root);
//   for (let i = 0, len = queue.length - 1; i < len; i++) {
//     queue[i].left = null;
//     queue[i].right = queue[i + 1];
//   }
//   return queue[0];
// };

// const flatten = root => {
//   if (!root || (!root.left && !root.right)) return root;
//   let left = flatten(root.left);
//   let right = flatten(root.right);
//   if (left) {
//     let leftTail = left;
//     while (leftTail.right) {
//       leftTail = leftTail.right;
//     }

//     root.left = null;
//     root.right = left;
//     leftTail.right = right;
//   }

//   return root;
// };

// export default flatten;

// const flatten = root => {
//   if (!root || (!root.left && !root.right)) return root;
//   let left = root.left;
//   let right = root.right;

//   if (left) {
//     root.right = left;
//     while (left.right) left = left.right;
//     left.right = right;
//     root.left = null;
//   }
//   flatten(root.right);
//   return root;
// };

// export default flatten;

// export default root => {
//   let node = root;
//   while (node) {
//     if (node.left) {
//       let ll = node.left;
//       while (ll.right) ll = ll.right;
//       ll.right = node.right;
//       node.right = node.left;
//       node.left = null;
//     }
//     node = node.right;
//   }
//   return root;
// };

/**
 * 后序遍历迭代
 */
export default root => {
  let node = root;
  const stack = [];
  let lastNode = null;

  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    if (stack.length) {
      let peek = stack[stack.length - 1];
      // lastNode 记录上一个出栈的结点，如果它是栈顶元素的右子结点，说明已访问过
      if (!peek.right || peek.right === lastNode) {
        node = stack.pop();

        if (node.left) {
          let ll = node.left;
          while (ll.right) ll = ll.right;
          ll.right = node.right;
          node.right = node.left;
          node.left = null;
        }

        lastNode = node;
        node = null;
      } else {
        node = peek.right;
      }
    }
  }

  return root;
};

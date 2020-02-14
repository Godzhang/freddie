// export default root => {
//   if (!root) return true;
//   let result = true;

//   const isEqual = (left, right) => {
//     if (!result || (!left && !right)) {
//       return;
//     } else if (!left || !right || left.val !== right.val) {
//       result = false;
//       return;
//     }
//     isEqual(left.left, right.right);
//     isEqual(left.right, right.left);
//   };
//   isEqual(root.left, root.right);

//   return result;
// };

/**
 * time: O(n)
 * space: O(logn) ~ O(n)
 */
export default root => {
  if (!root) return true;

  const walk = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right || left.val !== right.val) return false;
    return walk(left.left, right.right) && walk(left.right, right.left);
  };

  return walk(root.left, root.right);
};

// 也可以同 isSameTree 一样，使用队列实现

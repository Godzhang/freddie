// export default root => {
//   const map = new Map();

//   const helper = root => {
//     if (!root) return 0;
//     if (map.get(root)) return map.get(root);

//     let tou =
//       root.val +
//       (root.left ? helper(root.left.left) + helper(root.left.right) : 0) +
//       (root.right ? helper(root.right.left) + helper(root.right.right) : 0);
//     let butou = helper(root.left) + helper(root.right);
//     let max = Math.max(tou, butou);
//     map.set(root, max);
//     return max;
//   };

//   return helper(root);
// };

export default root => {
  // 返回一个长度为2的数组
  // arr[0] 代表不偷root，得到的最大钱数
  // arr[1] 代表抢root，得到的最大钱数
  const helper = root => {
    if (!root) return [0, 0];
    let left = helper(root.left);
    let right = helper(root.right);
    // 如果偷，就不能加相邻两个偷的值
    let rob = root.val + left[0] + right[0];
    // 如果不偷，就取相邻两个子结点的最大值
    let no_rob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    return [no_rob, rob];
  };
  let res = helper(root);
  return Math.max(res[0], res[1]);
};

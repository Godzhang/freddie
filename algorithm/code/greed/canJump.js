/**
 * 贪心算法
 */
// export default nums => {
//   let lastPos = nums.length - 1;
//   for (let i = lastPos; i >= 0; i--) {
//     if (i + nums[i] >= lastPos) {
//       lastPos = i;
//     }
//   }
//   return lastPos === 0;
// };

/**
 * 动态规划,自顶向下
 */
// export default nums => {
//   const totalLength = nums.length;
//   const memo = Array(totalLength).fill(0);
//   memo[totalLength - 1] = 1;

//   const jump = position => {
//     if (memo[position] === 1) {
//       return true;
//     } else if (memo[position] === -1) {
//       return false;
//     }
//     const maxJump = Math.min(position + nums[position], totalLength - 1);
//     for (let i = position + 1; i <= maxJump; i++) {
//       const jumpResult = jump(i);
//       if (jumpResult) {
//         memo[position] = 1;
//         return true;
//       }
//     }
//     memo[position] = -1;
//     return false;
//   };
//   return jump(0);
// };

/**
 * 动态规划，自底向上
 */
export default nums => {
  const totalLength = nums.length;
  const memo = Array(totalLength).fill(0);
  memo[totalLength - 1] = 1;

  for (let i = totalLength - 2; i >= 0; i--) {
    let maxJump = Math.min(i + nums[i], totalLength - 1);
    for (let j = i + 1; j <= maxJump; j++) {
      if (memo[j] === 1) {
        memo[i] = 1;
        break;
      }
    }
  }

  return memo[0] === 1;
};

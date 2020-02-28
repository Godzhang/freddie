/**
 * 动态规划思想
 */
// export default (m, n) => {
//   // 1. dp[i][j]代表走到[i,j]有多少种可能路径
//   const dp = Array(n);
//   for (let i = 0; i < n; i++) {
//     dp[i] = Array(m);
//   }
//   // 3. 找出初始值
//   // 由于横向和纵向都只有1种路径，可在下面关系式计算中直接赋值

//   // 2. 使用关系式计算出dp[n][m]
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       // 横向和纵向都只有1种路径
//       if (i === 0 || j === 0) {
//         dp[i][j] = 1;
//       } else {
//         dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//       }
//     }
//   }
//   return dp[n - 1][m - 1];
// };

/**
 * 递归，数据较大时会超时
 */
// const uniquePaths = (m, n) => {
//   if (m === 1 || n === 1) return 1;
//   return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
// };

// export default uniquePaths;

/**
 * 一位数组dp
 * 计算一行(或一列)数据的时候，直接把上面一行(或一列)的数据搬下来，然后每个格子就等于前一个格子的数据加上当前格子的数据。
 */
export default (m, n) => {
  const memo = new Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      memo[j] += memo[j - 1];
    }
  }
  return memo[n - 1];
};

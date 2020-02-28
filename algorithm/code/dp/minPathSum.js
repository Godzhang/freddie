/**
 * 二维数组
 * time: O(mn)
 * space: O(mn)
 */
// export default grid => {
//   let rows = grid.length;
//   let cols = grid[0].length;
//   // 1. dp[i][j]代表走到[i,j]的最小路径和
//   const dp = Array(rows);
//   for (let i = 0, len = rows; i < len; i++) {
//     dp[i] = Array(cols);
//   }
//   // 3. 找出初始值
//   dp[0][0] = grid[0][0];
//   // 2. 使用关系式计算出最小路径和 dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1])
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (i === 0 && j > 0) {
//         dp[i][j] = dp[i][j - 1] + grid[i][j];
//       } else if (j === 0 && i > 0) {
//         dp[i][j] = dp[i - 1][j] + grid[i][j];
//       } else if (i > 0 && j > 0) {
//         dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j];
//       }
//     }
//   }
//   return dp[rows - 1][cols - 1];
// };
/**
 * 不使用额外空间，在原数组上操作
 * time: O(mn)
 * space: O(1)
 */
// export default grid => {
//   let rows = grid.length;
//   let cols = grid[0].length;

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       if (i === 0 && j > 0) {
//         grid[i][j] = grid[i][j - 1] + grid[i][j];
//       } else if (j === 0 && i > 0) {
//         grid[i][j] = grid[i - 1][j] + grid[i][j];
//       } else if (i > 0 && j > 0) {
//         grid[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]) + grid[i][j];
//       }
//     }
//   }
//   return grid[rows - 1][cols - 1];
// };

/**
 * 一维数组 dp
 * time: O(mn)
 * space: O(m || n)
 */
export default grid => {
  const rows = grid.length;
  const cols = grid[0].length;
  const dp = Array(cols).fill(0);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 && j > 0) {
        dp[j] = dp[j - 1] + grid[i][j];
      } else if (j === 0) {
        dp[j] += grid[i][j];
      } else if (i > 0 && j > 0) {
        dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
      }
    }
  }
  return dp[cols - 1];
};

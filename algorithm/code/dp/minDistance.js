export default (word1, word2) => {
  let m = word1.length;
  let n = word2.length;
  // dp[i][j] 为当word1长度为i，word2长度为j时，word1转化为word2所使用的最少操作数
  const dp = Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    dp[i] = Array(n + 1);
  }
  // 初始值
  // 当有一个长度为0时，只能进行插入或删除
  dp[0][0] = 0;
  // dp[0][0 ~ n] 只能不断插入
  for (let i = 1; i <= n; i++) {
    dp[0][i] = dp[0][i - 1] + 1;
  }
  // dp[0 ~ m][0] 只能不断删除
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
  }
  // 关系式 dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]) + 1
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 如果 word1[i] 与 word2[j] 相等
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }
  return dp[m][n];
};

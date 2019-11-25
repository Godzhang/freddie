// 动态规划
export default (arr, m, n) => {
  let dp = (m, n) => {
    if (m === 2 && n === 2) {
      if (arr[1][1] === 1 || arr[1][0] + arr[0][1] === 2) {
        return 0;
      }
      if (arr[1][0] === 1 || arr[0][1] === 1) {
        return 1;
      }
      return 2;
    } else if (m < 2 || n < 2) {
      if (m < 2) {
        // 单行有1就返回0，没有1返回1
        return arr[m - 1].includes(1) ? 0 : 1;
      } else {
        // 单列
        for (let i = 0; i < m; i++) {
          if (arr[i][0] === 1) {
            return 0;
          }
        }
        return 1;
      }
    } else {
      return dp(m - 1, n) + dp(m, n - 1);
    }
  };
  return dp(m, n);
};

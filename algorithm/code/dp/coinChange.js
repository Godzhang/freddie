// dp函数方式
// export default (coins, amount) => {
//   // 备忘录去除重复子问题
//   const cache = {};
//   const dp = amount => {
//     if (cache[amount]) return cache[amount];
//     if (amount === 0) return 0;
//     if (amount < 0) return -1;
//     let result = Number.MAX_SAFE_INTEGER;
//     for (let i = coins.length - 1; i >= 0; i--) {
//       let sub = dp(amount - coins[i]);
//       // 子问题无解，跳过
//       if (sub === -1) continue;
//       result = Math.min(result, sub + 1);
//     }
//     // 如果 result 未变，说明无解
//     cache[amount] = result === Number.MAX_SAFE_INTEGER ? -1 : result;
//     return cache[amount];
//   };
//   return dp(amount);
// };

// dp数组方式 自底向上
export default (coins, amount) => {
  const dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1, il = dp.length; i < il; i++) {
    for (let j = 0, jl = coins.length; j < jl; j++) {
      if (i - coins[j] < 0) continue;
      dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};

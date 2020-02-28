// dp[i] 代表输出i个A的最少次数
// export default n => {
//   const dp = [0, 0, 2, 3];
//   if (n <= 3) return dp[n];

//   for (let i = 4; i <= n; i++) {
//     for (let j = ~~(i / 2); j > 0; j--) {
//       if (i % j === 0) {
//         dp[i] = dp[j] + i / j;
//         break;
//       }
//     }
//   }
//   return dp[n];
// };

// 优化，使用递归，只计算需要的对应值，减少操作次数
// export default n => {
//   const dp = [0, 0, 2, 3];

//   const helper = k => {
//     if (dp[k] != undefined) return dp[k];
//     for (let i = ~~(k / 2); i > 0; i--) {
//       if (k % i === 0) {
//         return (dp[k] = helper(i) + k / i);
//       }
//     }
//   };
//   helper(n);
//   return dp[n];
// };

// const minSteps = n => {
//   if (n === 1) return 0;

//   for (let i = ~~(n / 2); i > 0; i--) {
//     if (n % i === 0) {
//       return minSteps(i) + n / i;
//     }
//   }
// };
// export default minSteps;

export default n => {
  let res = 0;

  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      res += i;
      n /= i;
      i = 1;
    }
  }

  return res;
};

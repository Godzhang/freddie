// dp[i] 代表偷到第i个房屋的最大金额
// dp[i] = dp[i] + Math.max(dp[i-2], dp[i-3])
// 初始值 dp[0] dp[1] dp[2]
// export default nums => {
//   if (nums.length === 0) return 0;
//   if (nums.length === 1) return nums[0];
//   if (nums.length === 2) return Math.max(nums[0], nums[1]);
//   let len = nums.length;
//   nums[2] += nums[0];
//   for (let i = 3; i < len; i++) {
//     nums[i] += Math.max(nums[i - 2], nums[i - 3]);
//   }
//   return Math.max(nums[len - 1], nums[len - 2]);
// };

// dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i])
// export default nums => {
//   let len = nums.length;
//   if (len === 0) return 0;
//   if (len === 1) return nums[0];
//   if (len === 2) return Math.max(nums[0], nums[1]);

//   nums[1] = Math.max(nums[0], nums[1]);
//   for (let i = 2; i < len; i++) {
//     nums[i] = Math.max(nums[i - 1], nums[i - 2] + nums[i]);
//   }
//   return nums[len - 1];
// };

export default nums => {
  let prevMax = 0;
  let currMax = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    nums[i] = Math.max(currMax, prevMax + nums[i]);
    prevMax = currMax;
    currMax = nums[i];
  }
  return currMax;
};

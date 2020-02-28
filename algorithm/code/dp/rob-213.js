// const robRange = (nums, start, end) => {
//   let len = nums.length;
//   let prevMax = 0;
//   let currMax = 0;
//   for (let i = start; i <= end; i++) {
//     nums[i] = Math.max(currMax, prevMax + nums[i]);
//     prevMax = currMax;
//     currMax = nums[i];
//   }
//   return currMax;
// };

// const rob = nums => {
//   let len = nums.length;
//   if (nums.length === 0) return 0;
//   if (nums.length === 1) return nums[0];
//   return Math.max(
//     robRange(nums.slice(), 0, len - 2),
//     robRange(nums, 1, len - 1)
//   );
// };

// export default rob;

// [3, 1, 2, 5, 4]
// dp1: [3, 3, 5, 8]
// dp2: [1, 2, 6, 6]
export default nums => {
  let len = nums.length;
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  const dp1 = [nums[0], Math.max(nums[0], nums[1])];
  const dp2 = [nums[1], Math.max(nums[1], nums[2])];

  for (let i = 2; i < len; i++) {
    dp1[i] = Math.max(dp1[i - 2] + nums[i], dp1[i - 1]);
    dp2[i] = Math.max(dp2[i - 2] + nums[i + 1], dp2[i - 1]);
  }

  return Math.max(dp1[len - 2], dp1[len - 2]);
};

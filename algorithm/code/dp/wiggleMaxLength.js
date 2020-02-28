// export default nums => {
//   if (nums.length < 2) return nums.length;
//   const len = nums.length;
//   const up = Array(len);
//   const down = Array(len);
//   up[0] = down[0] = 1;
//   for (let i = 1; i < len; i++) {
//     if (nums[i] > nums[i - 1]) {
//       up[i] = down[i - 1] + 1;
//       down[i] = down[i - 1];
//     } else if (nums[i] < nums[i - 1]) {
//       down[i] = up[i - 1] + 1;
//       up[i] = up[i - 1];
//     } else {
//       up[i] = up[i - 1];
//       down[i] = down[i - 1];
//     }
//   }
//   return Math.max(up.pop(), down.pop());
// };

// export default nums => {
//   if (nums.length < 2) return nums.length;
//   const len = nums.length;
//   let up = 1;
//   let down = 1;
//   for (let i = 1; i < len; i++) {
//     if (nums[i] > nums[i - 1]) {
//       up = down + 1;
//     } else if (nums[i] < nums[i - 1]) {
//       down = up + 1;
//     }
//   }
//   return Math.max(up, down);
// };

export default nums => {
  if (nums.length < 2) return nums.length;
  let prevDiff = nums[0] - nums[1];
  let count = prevDiff === 0 ? 1 : 2;
  for (let i = 0, len = nums.length - 1; i < len; i++) {
    let diff = nums[i] - nums[i + 1];
    if ((diff > 0 && prevDiff <= 0) || (diff < 0 && prevDiff >= 0)) {
      count++;
      prevDiff = diff;
    }
  }
  return count;
};

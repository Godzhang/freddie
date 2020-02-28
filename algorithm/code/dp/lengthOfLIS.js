// dp[i] 代表以第i个数为末尾的最大子序列数
// dp[i] = 小于第i个数的最近数的最大子序列数 + 1
// dp[0] = 1
/**
 * time: O(n^2)
 * space: O(n)
 */
// export default nums => {
//   if (!nums.length) return 0;
//   let len = nums.length;
//   let dp = Array(len).fill(1);
//   let max = 1;
//   for (let i = 1; i < len; i++) {
//     let currLis = 0;
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i] && dp[j] > currLis) {
//         currLis = dp[j];
//       }
//     }
//     dp[i] = currLis + 1;
//     max = Math.max(dp[i], max);
//   }
//   return max;
// };

// 同上例
// export default nums => {
//   if (!nums.length) return 0;
//   let len = nums.length;
//   let dp = Array(len).fill(1);
//   let max = 1;
//   for (let i = 1; i < len; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//     max = Math.max(max, dp[i]);
//   }
//   return max;
// };

/**
 * 动态规划 + 二分查找
 * time: O(nlogn)
 * space: O(n)
 */
const binaryInsert = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = ~~((start + end) / 2);
    if (target <= arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  arr[end + 1] = target;
};
const lengthOfLIS = nums => {
  if (!nums.length) return 0;
  const tails = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    if (!tails.length || nums[i] > tails[tails.length - 1]) {
      tails.push(nums[i]);
    } else {
      binaryInsert(tails, nums[i]);
    }
  }
  return tails.length;
};
export default lengthOfLIS;

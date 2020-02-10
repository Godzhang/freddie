/**
 * time: O(nk)
 * space: O(1)
 */
// export default (nums, k) => {
//   while (k > 0) {
//     for (let i = 0, len = nums.length - k; i < len; i++) {
//       if (nums[i] === nums[i + k]) {
//         return true;
//       }
//     }
//     k--;
//   }
//   return false;
// };

/**
 * time: O(n)
 * space: O(n)
 */
// export default (nums, k) => {
//   let map = {};
//   for (let i = 0, len = nums.length; i < len; i++) {
//     let curr = nums[i];
//     if (!map[curr] == null) {
//       map[curr] = i;
//     } else {
//       if (i - map[curr] <= k) {
//         return true;
//       } else {
//         map[curr] = i;
//       }
//     }
//   }
//   return false;
// };

/**
 * time: O(n)
 * space: O(k)
 * 借助一个长度最大为k的集合
 */
export default (nums, k) => {
  let set = new Set();
  for (let i = 0, len = nums.length; i < len; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }
  return false;
};

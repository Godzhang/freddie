/**
 * 哈希表
 * time: O(n)
 * space: O(n)
 */
// export default nums => {
//   let map = {};
//   for (let i = 0, len = nums.length; i < len; i++) {
//     let curr = nums[i];
//     if (!map[curr]) {
//       map[curr] = true;
//     } else {
//       return true;
//     }
//   }
//   return false;
// };

/**
 * Set
 * time: O(n) array转换set需要时间
 * space: O(n)
 */
// export default nums => {
//   let set = new Set(nums);
//   return set.size !== nums.length;
// };

/**
 * 先排序(使用堆排序，最坏nlogn)，再比较
 * time: O(nlogn)
 * space: O(1)
 */
import heapSort from "../../code/sort/heapSort";

export default nums => {
  heapSort(nums);
  for (let i = 0, len = nums.length - 1; i < len; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

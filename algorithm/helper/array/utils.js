/**
 * 二分查找
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param {*} arr
 * @param {*} target
 */
export const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let midIndex = ~~((left + right) / 2);
    let mid = arr[midIndex];

    if (mid === target) {
      return midIndex;
    } else if (mid > target) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }
  return -1;
};

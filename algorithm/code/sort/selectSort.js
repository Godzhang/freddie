/**
 * 时间复杂度：
 *    最优：O(n^2)
 *    平均：O(n^2)
 *    最坏：O(n^2)
 * 空间复杂度：O(1)
 * 是否稳定：不稳定 [2, 2, 1]
 */

export default arr => {
  for (let i = 0, len = arr.length, minIndex; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

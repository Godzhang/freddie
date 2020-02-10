/**
 * 时间复杂度：
 *    最优：O(n)
 *    平均：O(n^2)
 *    最坏：O(n^2)
 * 空间复杂度：O(1)
 * 是否稳定：稳定
 */

export default arr => {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let tmp = arr[i];
    let j = i;
    for (; j > 0; j--) {
      if (tmp >= arr[j - 1]) {
        break;
      }
      arr[j] = arr[j - 1];
    }
    arr[j] = tmp;
  }
  return arr;
};

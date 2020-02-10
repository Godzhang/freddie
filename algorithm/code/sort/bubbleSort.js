/**
 * 时间复杂度：
 *    最优：O(n)
 *    平均：O(n^2)
 *    最坏：O(n^2)
 * 空间复杂度：O(1)
 * 是否稳定：稳定
 */

// export default arr => {
//   for (let i = arr.length - 1, tmp; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       tmp = arr[j];
//       if (tmp > arr[j + 1]) {
//         arr[j] = arr[j + 1];
//         arr[j + 1] = tmp;
//       }
//     }
//   }
//   return arr;
// };

// 冒泡排序优化，优化后最优时间复杂度 O(n)
// 使用标志位，如果交换了值，则标志位置为false。
// 如果数组已是正序，第一次循环后仍为 true，无需继续循环
// export default arr => {
//   for (let i = arr.length - 1, tmp; i > 0; i--) {
//     let flag = true;
//     for (let j = 0; j < i; j++) {
//       tmp = arr[j];
//       if (tmp > arr[j + 1]) {
//         arr[j] = arr[j + 1];
//         arr[j + 1] = tmp;
//         flag = false;
//       }
//     }
//     if (flag) break;
//   }
//   return arr;
// };

// 继续优化
// [3, 4, 2, 1, 5, 6, 7, 8]
export default arr => {
  let len = arr.length;
  let lastExchangeIndex = 0; // 记录最后一次交换的位置
  let sortBorder = len - 1; // 无序数列的边界，每次比较只需要比到这里为止

  for (let i = 0; i < len; i++) {
    let isSorted = true;
    for (let j = 0; j < sortBorder; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSorted = false;
        lastExchangeIndex = j;
      }
    }
    sortBorder = lastExchangeIndex;
    if (isSorted) break;
  }
  return arr;
};

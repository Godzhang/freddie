/**
 * 时间复杂度：k 是统计数列长度
 *    最优：O(n + k)
 *    平均：O(n + k)
 *    最坏：O(n + k)
 * 空间复杂度：O(k)
 * 是否稳定：稳定不稳定的方法都有
 */

// 非稳定排序
// export default arr => {
//   if (arr.length < 2) return arr;

//   let len = arr.length;
//   let max = arr[0];
//   let min = arr[0];
//   for (let i = 1; i < len; i++) {
//     max = Math.max(arr[i], max);
//     min = Math.min(arr[i], min);
//   }
//   let countArr = new Array(max - min + 1).fill(0);

//   arr.forEach(val => {
//     countArr[val - min]++;
//   });

//   for (let i = 0, j = 0, l = countArr.length; i < l; i++) {
//     while (countArr[i]--) arr[j++] = i + min;
//   }

//   return arr;
// };

// 稳定排序
export default arr => {
  if (arr.length < 1) return arr;

  let len = arr.length;
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < len; i++) {
    max = Math.max(arr[i], max);
    min = Math.min(arr[i], min);
  }
  let countArr = new Array(max - min + 1).fill(0);
  let result = [];

  for (let i = 0; i < len; i++) {
    countArr[arr[i] - min]++;
  }
  // 存储当前元素值的最后位置
  // 最小的值肯定在第一位，第二小在第二位，以此类推
  for (let i = 1, l = countArr.length; i < l; i++) {
    countArr[i] += countArr[i - 1];
  }
  // 倒序遍历数组
  // 对于两个相同的值，[3,5,5,4]
  // 排序后， 后面的5在第4个位置，也就是索引为3，前面的5在第3个位置，索引为2，这样实现了稳定排序
  for (let i = len - 1; i >= 0; i--) {
    result[--countArr[arr[i] - min]] = arr[i];
  }

  return result;
};

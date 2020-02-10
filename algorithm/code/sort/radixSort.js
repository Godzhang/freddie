/**
 * 时间复杂度：d 为排序次数，k 为桶的个数
 *    最优：O(d(n+k))
 *    平均：O(d(n+k))
 *    最坏：O(d(n+k))
 *    官方三种情况都是 nk ，待研究
 * 空间复杂度：O(n+k)
 * 是否稳定：稳定
 */

// 基数排序 + 桶排序
// const bucketSortForRadix = (arr, significantDigit, radixBase) => {
//   let buckets = [];
//   let aux = [];
//   let len = arr.length;
//   // 初始化桶
//   for (let i = 0; i < radixBase; i++) {
//     buckets[i] = [];
//   }
//   for (let i = 0; i < len; i++) {
//     let bucketIndex = ~~(arr[i] / significantDigit) % radixBase;
//     buckets[bucketIndex].push(arr[i]);
//   }
//   for (let i = 0; i < radixBase; i++) {
//     aux.push(...buckets[i]);
//   }
//   for (let i = 0; i < len; i++) {
//     arr[i] = aux[i];
//   }
//   return arr;
// };
// const radixSort = arr => {
//   if (arr.length < 2) return arr;

//   let significantDigit = 1; // 有效位，先基于个位数
//   let radixBase = 10; // 排序十进制数，基数为 10,使用 10 个桶分布元素

//   // 找出最大值
//   let maxValue = arr[0];
//   for (let i = 1, len = arr.length; i < len; i++) {
//     if (arr[i] > maxValue) {
//       maxValue = arr[i];
//     }
//   }
//   // 从个位开始排序
//   while (maxValue / significantDigit >= 1) {
//     arr = bucketSortForRadix(arr, significantDigit, radixBase);
//     significantDigit *= radixBase;
//   }

//   return arr;
// };

// export default radixSort;

// 基数排序 + 计数排序
const countingSortForRadix = (arr, radixBase, significantDigit) => {
  let bucketIndex = 0;
  let buckets = new Array(radixBase).fill(0);
  let aux = [];
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    bucketIndex = ~~(arr[i] / significantDigit) % radixBase;
    buckets[bucketIndex]++;
  }

  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i - 1];
  }

  for (let i = len - 1; i >= 0; i--) {
    bucketIndex = ~~(arr[i] / significantDigit) % radixBase;
    aux[--buckets[bucketIndex]] = arr[i];
  }

  for (let i = 0; i < len; i++) {
    arr[i] = aux[i];
  }
  return arr;
};

const radixSort = (arr, radixBase = 10) => {
  if (arr.length < 2) return arr;
  let maxValue = arr[0];
  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  let significantDigit = 1;
  while (maxValue / significantDigit >= 1) {
    arr = countingSortForRadix(arr, radixBase, significantDigit);
    significantDigit *= radixBase;
  }
  return arr;
};

export default radixSort;

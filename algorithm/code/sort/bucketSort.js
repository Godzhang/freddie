/**
 * 时间复杂度：k 是桶的数量
 *    最优：O(n)
 *    平均：O(n)
 *    最坏：O(n^2) 所有元素都放在一个桶中
 * 空间复杂度：O(n)
 * 是否稳定：桶使用队列稳定，使用栈就不稳定
 * 时间复杂度和空间复杂度不一定对，暂不深入研究
 */

import insertSort from "./insertSort";

// const sortBuckets = buckets => {
//   const sortArr = [];
//   for (let i = 0, len = buckets.length; i < len; i++) {
//     let bucket = buckets[i];
//     if (bucket) {
//       // 使用插入排序排序桶中的元素;
//       insertSort(bucket);
//       sortArr.push(...bucket);
//     }
//   }
//   return sortArr;
// };
// // bucketSize 应为桶中的元素个数，bucketCount 为桶的个数
// const createBuckets = (arr, bucketSize) => {
//   // 找到最大值和最小值
//   let maxValue = arr[0];
//   let minValue = arr[0];
//   for (let i = 1, len = arr.length; i < len; i++) {
//     if (arr[i] > maxValue) {
//       maxValue = arr[i];
//     } else if (arr[i] < minValue) {
//       minValue = arr[i];
//     }
//   }
//   // 计算需要多少个桶
//   const bucketCount = ~~((maxValue - minValue) / bucketSize) + 1;
//   // 创建桶
//   const buckets = [];
//   for (let i = 0; i < bucketCount; i++) {
//     buckets[i] = [];
//   }
//   // 将元素分布到不同的桶中
//   for (let i = 0, len = arr.length; i < len; i++) {
//     const bucketIndex = ~~((arr[i] - minValue) / bucketSize);
//     buckets[bucketIndex].push(arr[i]);
//   }
//   return buckets;
// };
// const bucketSort = (arr, bucketSize = 5) => {
//   if (arr.length < 2) return arr;
//   const buckets = createBuckets(arr, bucketSize);
//   return sortBuckets(buckets);
// };

// export default bucketSort;

const bucketSort = (arr, bucketCount) => {
  if (arr.length < 2) return arr;

  let len = arr.length;
  let min = arr[0];
  let max = arr[0];
  let buckets = [];
  let result = [];

  for (let i = 1; i < len; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  // 求出每一个桶的数值范围
  let space = (max - min + 1) / bucketCount;
  for (let i = 0; i < len; i++) {
    // 找到相应的桶排序
    let index = ~~((arr[i] - min) / space);
    if (buckets[index]) {
      buckets[index].push(arr[i]);
    } else {
      buckets[index] = [arr[i]];
    }
  }

  buckets.forEach(bucket => result.push(...insertSort(bucket)));
  return result;
};

export default bucketSort;

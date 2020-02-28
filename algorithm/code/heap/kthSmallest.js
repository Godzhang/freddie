// 维护一个长度为 k 的大顶堆
// const swap = (arr, i, j) => {
//   let tmp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = tmp;
// };
// const heapify = (arr, index, len) => {
//   let leftIndex = 2 * index + 1;
//   let rightIndex = 2 * index + 2;
//   let maxIndex = index;

//   if (leftIndex < len && arr[maxIndex] < arr[leftIndex]) {
//     maxIndex = leftIndex;
//   }
//   if (rightIndex < len && arr[maxIndex] < arr[rightIndex]) {
//     maxIndex = rightIndex;
//   }
//   if (index !== maxIndex) {
//     swap(arr, index, maxIndex);
//     heapify(arr, maxIndex, len);
//   }
// };

// const buildMaxHeap = arr => {
//   let lastNoLeafNodeIndex = ~~(arr.length / 2);
//   for (let i = lastNoLeafNodeIndex; i >= 0; i--) {
//     heapify(arr, i, arr.length);
//   }
// };
// const siftDown = heap => {
//   let index = 0;
//   let tmp = heap[index];
//   let childIndex = 2 * index + 1;
//   while (childIndex < heap.length) {
//     if (
//       childIndex + 1 < heap.length &&
//       heap[childIndex + 1] > heap[childIndex]
//     ) {
//       childIndex++;
//     }
//     if (tmp > heap[childIndex]) {
//       break;
//     }
//     heap[index] = heap[childIndex];
//     index = childIndex;
//     childIndex = 2 * index + 1;
//   }
//   heap[index] = tmp;
// };
// const kthSmallest = (matrix, k) => {
//   const flatten = matrix.reduce((res, curr) => {
//     res.push(...curr);
//     return res;
//   }, []);
//   const heap = [];
//   for (let i = 0; i < k; i++) {
//     heap.push(flatten.shift());
//   }
//   buildMaxHeap(heap);
//   flatten.forEach(val => {
//     if (val < heap[0]) {
//       heap[0] = val;
//       siftDown(heap);
//     }
//   });
//   return heap[0];
// };

// export default kthSmallest;

/**
 * 二分查找
 */
export default (matrix, k) => {
  let len = matrix.length;
  let start = matrix[0][0];
  let end = matrix[len - 1][len - 1];
  while (start < end) {
    let mid = ~~((start + end) / 2);
    let count = 0;
    // 遍历每一行
    for (let i = 0; i < len; i++) {
      let j = len - 1;
      while (j >= 0 && matrix[i][j] > mid) {
        j--;
      }
      // 加上每一行有多少个比 mid 小的值
      count = count + j + 1;
    }
    if (count < k) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};

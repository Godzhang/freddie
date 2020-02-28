// export default (arr, k) => {
//   arr.sort((a, b) => a - b);
//   return arr.slice(0, k);
// };

// 小顶堆 O(klogn)
// const siftDown = function(heap) {
//   if (!heap.length) return;
//   let index = 0;
//   let tmp = heap[index];
//   let childIndex = 2 * index + 1;
//   while (childIndex < heap.length) {
//     if (
//       childIndex + 1 < heap.length &&
//       heap[childIndex + 1] < heap[childIndex]
//     ) {
//       childIndex++;
//     }
//     if (tmp < heap[childIndex]) {
//       break;
//     }
//     heap[index] = heap[childIndex];
//     index = childIndex;
//     childIndex = 2 * index + 1;
//   }
//   heap[index] = tmp;
// };
// const buildMinHeap = function(heap) {
//   let lastNoLeafNodeIndex = ~~(heap.length / 2) - 1;
//   for (let i = lastNoLeafNodeIndex; i >= 0; i--) {
//     heapify(heap, i, heap.length);
//   }
// };

// const heapify = function(heap, i, len) {
//   let leftIndex = 2 * i + 1;
//   let rightIndex = 2 * i + 2;
//   let minIndex = i;
//   if (leftIndex < len && heap[leftIndex] < heap[minIndex]) {
//     minIndex = leftIndex;
//   }
//   if (rightIndex < len && heap[rightIndex] < heap[minIndex]) {
//     minIndex = rightIndex;
//   }
//   if (minIndex !== i) {
//     let tmp = heap[minIndex];
//     heap[minIndex] = heap[i];
//     heap[i] = tmp;
//     heapify(heap, minIndex, len);
//   }
// };
// const getLeastNumbers = (arr, k) => {
//   buildMinHeap(arr);
//   let result = [];
//   for (let i = 0; i < k; i++) {
//     result.push(arr[0]);
//     [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
//     arr.pop();
//     siftDown(arr);
//   }
//   return result;
// };

// export default getLeastNumbers;

// 另一个思路，将前 k 个数构建大顶堆，然后遍历后面的数，如果比最大的数小，就加进去，同时删除最大的数，重新调整堆
// 也可以用选择排序，遍历 k 次

// 堆
// const heapify = function(heap, i, len) {
//   let leftIndex = 2 * i + 1;
//   let rightIndex = 2 * i + 2;
//   let maxIndex = i;
//   if (leftIndex < len && heap[leftIndex] > heap[maxIndex]) {
//     maxIndex = leftIndex;
//   }
//   if (rightIndex < len && heap[rightIndex] > heap[maxIndex]) {
//     maxIndex = rightIndex;
//   }
//   if (maxIndex !== i) {
//     let tmp = heap[maxIndex];
//     heap[maxIndex] = heap[i];
//     heap[i] = tmp;
//     heapify(heap, maxIndex, len);
//   }
// };
// const buildMaxHeap = function(heap) {
//   let lastNoLeafNodeIndex = ~~(heap.length / 2) - 1;
//   for (let i = lastNoLeafNodeIndex; i >= 0; i--) {
//     heapify(heap, i, heap.length);
//   }
// };
// const siftDown = function(heap) {
//   if (!heap.length) return;
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

// const lastStoneWeight = stones => {
//   if (stones.length === 1) return stones.pop();
//   buildMaxHeap(stones);

//   while (stones.length > 1) {
//     let first = stones.shift();
//     siftDown(stones);
//     let second = stones.shift();
//     if (first === second) {
//       siftDown(stones);
//     } else {
//       stones.push(first - second);
//       buildMaxHeap(stones);
//     }
//   }
//   return stones.length ? stones.pop() : 0;
// };

// export default lastStoneWeight;

// 数组
const binaryInsert = (arr, val) => {
  let s = 0;
  let e = arr.length - 1;
  while (s <= e) {
    let mid = ~~((s + e) / 2);
    if (val < arr[mid]) {
      e = mid - 1;
    } else if (val > arr[mid]) {
      s = mid + 1;
    } else {
      arr.splice(mid, 0, val);
      return;
    }
  }
  arr.splice(s, 0, val);
};
export default stones => {
  stones.sort((a, b) => a - b);
  while (stones.length > 1) {
    let p1 = stones.pop();
    let p2 = stones.pop();
    if (p1 > p2) {
      binaryInsert(stones, p1 - p2);
    }
  }
  return stones.length > 0 ? stones[0] : 0;
};

// 三指针
// export default num => {
//   let arr = [1];
//   let l2 = 0;
//   let l3 = 0;
//   let l5 = 0;
//   while (arr.length < num) {
//     let last = Math.min(arr[l2] * 2, arr[l3] * 3, arr[l5] * 5);
//     if (last === arr[l2] * 2) l2++;
//     if (last === arr[l3] * 3) l3++;
//     if (last === arr[l5] * 5) l5++;
//     arr.push(last);
//   }
//   return arr[arr.length - 1];
// };

// 最小堆，效率低
const heapify = (arr, index, len) => {
  let leftIndex = 2 * index + 1;
  let rightIndex = 2 * index + 2;
  let minIndex = index;

  if (leftIndex < len && arr[minIndex] > arr[leftIndex]) {
    minIndex = leftIndex;
  }
  if (rightIndex < len && arr[minIndex] > arr[rightIndex]) {
    minIndex = rightIndex;
  }
  if (index !== minIndex) {
    [arr[index], arr[minIndex]] = [arr[minIndex], arr[index]];
    heapify(arr, minIndex, len);
  }
};

const buildMinHeap = arr => {
  let lastNoLeafNodeIndex = ~~(arr.length / 2);
  for (let i = lastNoLeafNodeIndex; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }
};
const nthUglyNumber = num => {
  const heap = [1];
  const map = {};
  for (let i = 2; i <= num; i++) {
    let f = heap.shift();
    let f2 = f * 2;
    let f3 = f * 3;
    let f5 = f * 5;
    if (!map[f2]) {
      map[f2] = true;
      heap.push(f2);
    }
    if (!map[f3]) {
      map[f3] = true;
      heap.push(f3);
    }
    if (!map[f5]) {
      map[f5] = true;
      heap.push(f5);
    }
    buildMinHeap(heap);
  }
  return heap[0];
};

export default nthUglyNumber;

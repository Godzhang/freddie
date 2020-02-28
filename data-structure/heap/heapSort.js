const { swap } = require("./utils");

const heapify = (arr, index, len) => {
  let leftIndex = 2 * index + 1;
  let rightIndex = 2 * index + 2;
  let maxIndex = index;

  if (leftIndex < len && arr[maxIndex] < arr[leftIndex]) {
    maxIndex = leftIndex;
  }
  if (rightIndex < len && arr[maxIndex] < arr[rightIndex]) {
    maxIndex = rightIndex;
  }
  if (index !== maxIndex) {
    swap(arr, index, maxIndex);
    heapify(arr, maxIndex, len);
  }
};

const buildMaxHeap = arr => {
  let lastNoLeafNodeIndex = ~~(arr.length / 2);
  for (let i = lastNoLeafNodeIndex; i >= 0; i--) {
    heapify(arr, i, arr.length);
  }
};

const heapSort = arr => {
  let heapSize = arr.length;
  buildMaxHeap(arr);
  while (heapSize > 1) {
    swap(arr, 0, --heapSize);
    heapify(arr, 0, heapSize);
  }
  return arr;
};

module.exports = heapSort;

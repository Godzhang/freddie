// 使用小顶堆，长度维持在 K 个，这样堆顶就是第 K 个最大值
const KthLargest = function(k, nums) {
  this.k = k;
  this.heap = nums;
  this.buildMinHeap();
  if (k < nums.length) {
    for (let i = 0, len = nums.length - k; i < len; i++) {
      this.heap.shift();
      this.buildMinHeap();
    }
  }
};

KthLargest.prototype.add = function(val) {
  let heap = this.heap;
  if (heap.length < this.k) {
    heap.push(val);
    this.siftUp();
    if (heap.length < this.k) {
      return null;
    }
  } else if (val > heap[0]) {
    heap[0] = val;
    this.heapify(heap, 0, heap.length);
  }
  return heap[0];
};

KthLargest.prototype.siftUp = function() {
  let heap = this.heap;
  let index = heap.length - 1;
  let parentIndex = ~~((index - 1) / 2);
  let tmp = heap[index];

  while (index > 0 && tmp < heap[parentIndex]) {
    heap[index] = heap[parentIndex];
    index = parentIndex;
    parentIndex = ~~((index - 1) / 2);
  }
  heap[index] = tmp;
};

KthLargest.prototype.buildMinHeap = function() {
  let heap = this.heap;
  let lastNoLeafNodeIndex = ~~(heap.length / 2) - 1;
  for (let i = lastNoLeafNodeIndex; i >= 0; i--) {
    this.heapify(heap, i, heap.length);
  }
};

KthLargest.prototype.heapify = function(heap, i, len) {
  let leftIndex = 2 * i + 1;
  let rightIndex = 2 * i + 2;
  let minIndex = i;
  if (leftIndex < len && heap[leftIndex] < heap[minIndex]) {
    minIndex = leftIndex;
  }
  if (rightIndex < len && heap[rightIndex] < heap[minIndex]) {
    minIndex = rightIndex;
  }
  if (minIndex !== i) {
    let tmp = heap[minIndex];
    heap[minIndex] = heap[i];
    heap[i] = tmp;
    this.heapify(heap, minIndex, len);
  }
};

export default KthLargest;

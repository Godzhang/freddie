const { swap } = require("./utils");

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    if (val) {
      this.heap.push(val);
      this.siftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }

  siftUp(index) {
    let parentIndex = this.getParentIndex(index);
    let heap = this.heap;

    while (index > 0 && heap[parentIndex] > heap[index]) {
      swap(heap, parentIndex, index);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  // 导出堆的最小值
  extract() {
    if (this.isEmpty()) return;
    if (this.size() === 1) return this.heap.shift();

    const removedValue = this.heap.shift();
    this.siftDown(0);
    return removedValue;
  }

  // siftDown(index) {
  //   let leftIndex = this.getLeftIndex(index);
  //   let rightIndex = this.getRightIndex(index);
  //   let size = this.size();
  //   let minIndex = index;
  //   let heap = this.heap;

  //   if (leftIndex < size && heap[minIndex] > heap[leftIndex]) {
  //     minIndex = leftIndex;
  //   }
  //   if (rightIndex < size && heap[minIndex] > heap[rightIndex]) {
  //     minIndex = rightIndex;
  //   }
  //   if (index !== minIndex) {
  //     swap(this.heap, index, minIndex);
  //     this.siftDown(minIndex);
  //   }
  // }
  siftDown(index) {
    let heap = this.heap;
    let tmp = heap[index];
    let childIndex = 2 * index + 1;
    while (childIndex < heap.length) {
      if (
        childIndex + 1 < heap.length &&
        heap[childIndex + 1] < heap[childIndex]
      ) {
        childIndex++;
      }
      if (tmp < heap[childIndex]) {
        break;
      }
      heap[index] = heap[childIndex];
      index = childIndex;
      childIndex = 2 * index + 1;
    }
    heap[index] = tmp;
  }

  // 找到最小值
  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    if (index === 0) return undefined;
    return ~~((index - 1) / 2);
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  static from(arr) {
    let minHeap = new MinHeap();
    arr.forEach(val => minHeap.insert(val));
    return minHeap.heap;
  }
}

module.exports = MinHeap;

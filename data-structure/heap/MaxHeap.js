const { swap } = require("./utils");

// 构建二叉堆，将一个无序的完全二叉树调整为二叉堆
// 时间复杂度 O(n)
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // 堆的插入 O(logn)
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

    while (index > 0 && heap[parentIndex] < heap[index]) {
      swap(heap, parentIndex, index);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  // 导出堆的最小值 O(logn)
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
  //   let maxIndex = index;
  //   let heap = this.heap;

  //   if (leftIndex < size && heap[maxIndex] < heap[leftIndex]) {
  //     maxIndex = leftIndex;
  //   }
  //   if (rightIndex < size && heap[maxIndex] < heap[rightIndex]) {
  //     maxIndex = rightIndex;
  //   }
  //   if (index !== maxIndex) {
  //     swap(this.heap, index, maxIndex);
  //     this.siftDown(maxIndex);
  //   }
  // }
  siftDown(index) {
    let heap = this.heap;
    let tmp = heap[index];
    let childIndex = 2 * index + 1;
    while (childIndex < heap.length) {
      if (
        childIndex + 1 < heap.length &&
        heap[childIndex + 1] > heap[childIndex]
      ) {
        childIndex++;
      }
      if (tmp > heap[childIndex]) {
        break;
      }
      heap[index] = heap[childIndex];
      index = childIndex;
      childIndex = 2 * index + 1;
    }
    heap[index] = tmp;
  }

  // 找到最大值
  findMaximum() {
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
    let maxHeap = new MaxHeap();
    arr.forEach(val => maxHeap.insert(val));
    return maxHeap.heap;
  }
}

module.exports = MaxHeap;

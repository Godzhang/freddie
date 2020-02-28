// 此处为最大优先队列
class PriorityQueue {
  constructor(length = 32) {
    this.size = 0;
    this.heap = Array.from({ length });
  }

  enQueue(val) {
    if (this.size >= this.heap.length) {
      // 扩容
      this.resize();
    }
    this.heap[this.size++] = val;
    this.siftUp();
  }

  deQueue() {
    if (this.size <= 0) return;
    let head = this.heap[0];
    this.heap[0] = this.heap[--this.size];
    this.siftDown();
    return head;
  }

  siftUp() {
    let currIndex = this.size - 1;
    let parentIndex = ~~((currIndex - 1) / 2);
    let heap = this.heap;
    let tmp = this.heap[currIndex];
    while (currIndex > 0 && tmp > heap[parentIndex]) {
      heap[currIndex] = heap[parentIndex];
      currIndex = parentIndex;
      parentIndex = ~~((currIndex - 1) / 2);
    }
    heap[currIndex] = tmp;
  }

  siftDown() {
    let heap = this.heap;
    let index = 0;
    let childIndex = 2 * index + 1;
    let tmp = heap[0];

    while (childIndex < this.size) {
      if (
        childIndex + 1 < this.size &&
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

  resize() {
    this.heap = this.heap.concat(Array.from({ length: this.heap.length }));
  }
}

module.exports = PriorityQueue;

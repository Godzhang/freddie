/**
 * 时间复杂度：
 *    最优：O(nlogn)
 *    平均：O(nlogn)
 *    最坏：O(nlogn)
 * 空间复杂度：O(1)
 * 是否稳定：不稳定
 */

const maxHeapify = (arr, index, heapSize) => {
  let iMax = index;
  let iLeft = 2 * index + 1;
  let iRight = 2 * (index + 1);

  // 左节点是否比当前结点大
  if (iLeft < heapSize && arr[index] < arr[iLeft]) {
    iMax = iLeft;
  }

  // 右节点是否比当前结点大
  if (iRight < heapSize && arr[iMax] < arr[iRight]) {
    iMax = iRight;
  }

  // 如果当前节点不是三者中最大的
  if (iMax !== index) {
    [arr[iMax], arr[index]] = [arr[index], arr[iMax]];
    maxHeapify(arr, iMax, heapSize);
  }
};
const buildMaxHeap = (arr, heapSize) => {
  // 找到最后一个非叶子结点
  let iParent = ~~(heapSize / 2 - 1);
  // 调整至大顶堆
  for (let i = iParent; i >= 0; i--) {
    maxHeapify(arr, i, heapSize);
  }
};
const heapSort = arr => {
  let heapSize = arr.length;

  buildMaxHeap(arr, heapSize);

  // 将堆顶元素和末尾元素互换，使末尾元素最大，继续调整堆
  for (let i = heapSize - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    maxHeapify(arr, 0, i);
  }

  return arr;
};

export default heapSort;

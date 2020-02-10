// 冒泡排序升级版，鸡尾酒排序
// 适用于大部分元素有序的数组
// 可继续针对有序区进行优化...
export default arr => {
  let len = arr.length;
  for (let i = 0, l = ~~(len / 2); i < l; i++) {
    // 奇数轮，从左向右比较交换
    let isSorted = true;
    for (let j = i; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSorted = false;
      }
    }
    if (isSorted) {
      break;
    }

    // 偶数轮，从右向左比较交换
    isSorted = true;
    for (let j = len - 1 - i; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        isSorted = false;
      }
    }
    if (isSorted) {
      break;
    }
  }
  return arr;
};

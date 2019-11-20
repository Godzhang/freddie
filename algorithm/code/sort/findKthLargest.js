export default (arr, k) => {
  // 性能不是最好的
  // arr.sort((a, b) => b - a);
  // return arr[k - 1];
  // ------------------------------------ //
  // 结合冒泡排序优化
  let len = arr.length - 1;
  for (let i = len, tmp; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr[len - (k - 1)];
};

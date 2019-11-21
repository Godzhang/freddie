export default arr => {
  // 一般做法
  // arr = arr.filter(item => item > 0);
  // if (!arr.length) return 1;
  // arr.sort((a, b) => a - b);
  // if (arr[0] !== 1) {
  //   return 1;
  // } else {
  //   for (let i = 0, l = arr.length - 1; i < l; i++) {
  //     if (arr[i + 1] - arr[i] > 1) {
  //       return arr[i] + 1;
  //     }
  //   }
  //   return arr.pop() + 1;
  // }
  // 结合选择排序优化
  arr = arr.filter(item => item > 0);
  if (!arr.length) return 1;
  for (let i = 0, len = arr.length, min, tmp; i < len; i++) {
    min = arr[i];
    for (let j = i + 1; j < len; j++) {
      if (min > arr[j]) {
        tmp = min;
        min = arr[j];
        arr[j] = tmp;
      }
    }
    arr[i] = min;

    if (i > 0) {
      if (arr[i] - arr[i - 1] > 1) {
        return arr[i - 1] + 1;
      }
    } else {
      if (min !== 1) {
        return 1;
      }
    }
  }
  return arr.pop() + 1;
};

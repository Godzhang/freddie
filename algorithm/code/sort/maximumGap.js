export default arr => {
  // 第一想法
  // if (arr.length < 2) return 0;
  // arr.sort((a, b) => a - b);
  // let gaps = [];
  // for (let i = 0, l = arr.length - 1; i < l; i++) {
  //   gaps.push(arr[i + 1] - arr[i]);
  // }
  // return Math.max.apply(null, gaps);
  // 第二想法
  // if (arr.length < 2) return 0;
  // arr.sort((a, b) => a - b);
  // let max = 0;
  // for (let i = 0, l = arr.length - 1; i < l; i++) {
  //   max = Math.max(max, arr[i + 1] - arr[i]);
  // }
  // return max;
  // 优化
  if (arr.length < 2) return 0;
  let max = 0;
  for (let i = arr.length - 1, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      tmp = arr[j];
      if (tmp > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
    if (i <= arr.length - 2) {
      max = Math.max(max, arr[i + 1] - arr[i]);
    }
  }
  // 上面循环不会比较前两个差值
  return Math.max(max, arr[1] - arr[0]);
};

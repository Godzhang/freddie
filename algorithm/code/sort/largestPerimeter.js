// export default arr => {
//   arr.sort((a, b) => a - b);
//   let max = 0;

//   for (let i = 0, len = arr.length - 2; i < len; i++) {
//     if (arr[i] + arr[i + 1] > arr[i + 2]) {
//       max = arr[i] + arr[i + 1] + arr[i + 2];
//     }
//   }

//   return max;
// };

// 活用冒泡排序
// export default arr => {
//   let len = arr.length;

//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//     if (i >= 2) {
//       if (arr[len - 1 - i] + arr[len - i] > arr[len - i + 1]) {
//         return arr[len - 1 - i] + arr[len - i] + arr[len - i + 1];
//       }
//     }
//   }
//   if (arr[0] + arr[1] > arr[2]) {
//     return arr[0] + arr[1] + arr[2];
//   }
//   return 0;
// };

// 每轮把最大的放到前面，选择排序思想
export default arr => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    if (i >= 2 && arr[i] + arr[i - 1] > arr[i - 2]) {
      return arr[i] + arr[i - 1] + arr[i - 2];
    }
  }
  return 0;
};

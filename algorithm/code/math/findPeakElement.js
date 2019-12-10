// 线性查找
// export default arr => {
//   let i = 0;
//   for (let len = arr.length; i < len; i++) {
//     let prev = i - 1 < 0 ? Number.NEGATIVE_INFINITY : arr[i - 1];
//     let cur = arr[i];
//     let next = i + 1 >= len ? Number.NEGATIVE_INFINITY : arr[i + 1];
//     if (cur > prev && cur > next) {
//       break;
//     }
//   }
//   return i;
// };

// 二分查找
export default arr => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = ((left + right) / 2) | 0;
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else if (arr[mid] > arr[mid + 1]) {
      right = mid;
    }
  }
  return left;
};

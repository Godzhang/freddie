// export default arr => {
//   let max = 0;
//   for (let i = 0, len = arr.length; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       max = Math.max(max, Math.min(arr[i], arr[j]) * (j - i));
//     }
//   }
//   return max;
// };

// 双指针法
export default arr => {
  let max = 0;
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    max = Math.max(max, Math.min(arr[start], arr[end]) * (end - start));
    if (arr[start] > arr[end]) {
      end--;
    } else if (arr[start] < arr[end]) {
      start++;
    } else {
      if (arr[start + 1] >= arr[end + 1]) {
        start++;
      } else {
        end--;
      }
    }
  }

  return max;
};

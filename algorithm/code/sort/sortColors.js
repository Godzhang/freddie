// import quickSort from "./quickSort";

// export default nums => {
//   return quickSort(nums);
// };

// export default nums => {
//   let len = nums.length;
//   let i = 0;
//   let zeroIndex = -1;
//   while (len) {
//     if (nums[i] === 2) {
//       nums.push(nums.splice(i, 1)[0]);
//     } else if (nums[i] === 0) {
//       if (zeroIndex === -1) {
//         zeroIndex = 0;
//       }
//       [nums[zeroIndex], nums[i]] = [nums[i], nums[zeroIndex]];
//       zeroIndex++;
//       i++;
//     } else {
//       i++;
//     }
//     len--;
//   }
//   return nums;
// };

// 双指针
export default nums => {
  let len = nums.length;
  let start = 0;
  let end = len - 1;
  let curr = 0;

  const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

  while (curr <= end) {
    if (nums[curr] === 0) {
      swap(nums, curr, start);
      curr++;
      start++;
    } else if (nums[curr] === 2) {
      swap(nums, curr, end);
      end--;
    } else {
      curr++;
    }
  }

  return nums;
};

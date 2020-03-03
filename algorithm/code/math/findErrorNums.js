// export default nums => {
//   const map = {};
//   let repeat = null;
//   let defect = null;
//   nums.forEach(n => {
//     if (!map[n]) {
//       map[n] = 0;
//     }
//     map[n]++;
//   });
//   for (let i = 1, len = nums.length; i <= len; i++) {
//     if (!map[i]) {
//       defect = i;
//     } else if (map[i] > 1) {
//       repeat = i;
//     }
//   }
//   return [repeat, defect];
// };

/**
 * 因为nums是从1开始的，可以使用映射方法
 * 值做索引，第一次访问，把对应索引位置的值置为负数，再次访问，如果是负数说明该值重复
 * 之后遍历，如果是正数，则是缺失元素
 */
export default nums => {
  let len = nums.length;
  let dup = -1;
  let missing = -1;
  for (let i = 0; i < len; i++) {
    let index = Math.abs(nums[i]) - 1;
    // 小于0说明重复访问了
    if (nums[index] < 0) {
      dup = Math.abs(nums[i]);
    } else {
      nums[index] *= -1;
    }
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      missing = i + 1;
      break;
    }
  }
  return [dup, missing];
};

// export default nums => {
//   let len = nums.length;
//   const arr = Array(len + 1).fill(0);
//   let dup = -1;
//   nums.forEach(n => {
//     arr[n]++;
//     if (arr[n] === 2) dup = n;
//   });
//   for (let i = 1; i <= len; i++) {
//     if (arr[i] === 0) {
//       return [dup, i];
//     }
//   }
// };

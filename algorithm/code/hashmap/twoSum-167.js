// export default (nums, target) => {
//   let map = {};
//   for (let i = 0, len = nums.length; i < len; i++) {
//     let cur = nums[i];

//     if (target > 0 && cur > target) return [];

//     if (map[target - cur]) {
//       return [map[target - cur], i + 1];
//     } else {
//       map[cur] = i + 1;
//     }
//   }
//   return [];
// };

// export default (nums, target) => {
//   let len = nums.length;
//   let start = 0;
//   let end = len - 1;
//   while (start < end) {
//     let sum = nums[start] + nums[end];
//     if (sum > target) {
//       end--;
//     } else if (sum < target) {
//       start++;
//     } else {
//       return [start + 1, end + 1];
//     }
//   }
//   return [];
// };

// 二分查找
export default (nums, target) => {
  const binarySearch = function(array, target) {
    let low = 0;
    let high = array.length - 1;
    while (low <= high) {
      let mid = ~~((low + high) / 2);
      if (array[mid] < target) {
        low = mid + 1;
      } else if (array[mid] > target) {
        high = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  };
  for (let i = 0, len = nums.length; i < len; i++) {
    let y = target - nums[i];
    let res = binarySearch(nums, y);
    if (res !== -1 && i !== res) {
      return i < res ? [i + 1, res + 1] : [res + 1, i + 1];
    }
  }
  return [];
};

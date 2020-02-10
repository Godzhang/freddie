/**
 * 双指针
 * 时间复杂度：O()
 * 空间复杂度：O(1) 不考虑结果数组
 */
// export default (nums1, nums2) => {
//   nums1.sort((a, b) => a - b);
//   nums2.sort((a, b) => a - b);

//   let result = [];
//   let i = 0;
//   let j = 0;

//   while (i < nums1.length && j < nums2.length) {
//     let n1 = nums1[i];
//     let n2 = nums2[j];
//     if (n1 === n2) {
//       result.push(n1);
//       i++;
//       j++;
//     } else if (n1 < n2) {
//       i++;
//     } else {
//       j++;
//     }
//   }

//   return result;
// };

// 哈希表
export default (nums1, nums2) => {
  let short = nums1.length > nums2.length ? nums2 : nums1;
  let long = short === nums1 ? nums2 : nums1;
  let obj = {};
  let result = [];

  short.forEach(num => {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
  });
  long.forEach(num => {
    let cur = obj[num];
    if (cur) {
      result.push(num);
      if (cur === 1) {
        delete obj[num];
      } else {
        obj[num]--;
      }
    }
  });
  return result;
};

// O(n^2)
// export default (nums1, nums2) => {
//   let len = nums1.length;
//   let result = Array(len).fill(-1);
//   for (let i = 0; i < len; i++) {
//     let cur = nums1[i];
//     let j = nums2.indexOf(cur);
//     for (let jLen = nums2.length; j < jLen - 1; j++) {
//       if (nums2[j + 1] > cur) {
//         result[i] = nums2[j + 1];
//         break;
//       }
//     }
//   }
//   return result;
// };

export default (nums1, nums2) => {
  let len2 = nums2.length;
  let map = {};

  for (let i = 0; i < len2 - 1; i++) {
    for (let j = i + 1; j < len2; j++) {
      if (nums2[j] > nums2[i]) {
        map[nums2[i]] = nums2[j];
        break;
      }
    }
  }

  return nums1.map(num => {
    return map[num] || -1;
  });
};

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
  let len = nums2.length;
  let map = {};
  let last = nums2[0];
  let stack = [last];

  for (let i = 1; i < len; i++) {
    if (nums2[i] > last) {
      while (stack.length) {
        let tmp = stack.pop();
        if (tmp < nums2[i]) {
          map[tmp] = nums2[i];
        } else {
          stack.push(tmp);
          break;
        }
      }
    }
    last = nums2[i];
    stack.push(last);
  }

  return nums1.map(num => {
    return map[num] || -1;
  });
};

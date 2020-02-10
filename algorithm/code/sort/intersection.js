/**
 * m,n分别是两个数组的长度,k为m,n中较大的数
 * 时间复杂度：O(k)
 * 空间复杂度：O(m + n)
 */

// export default (nums1, nums2) => {
//   nums1 = new Set(nums1);
//   nums2 = new Set(nums2);

//   let result = [];
//   let short = nums1.size > nums2.size ? nums2 : nums1;
//   let long = short === nums1 ? nums2 : nums1;
//   for (let val of short) {
//     if (long.has(val)) {
//       result.push(val);
//     }
//   }

//   return result;
// };

/**
 * 双指针
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
// export default (nums1, nums2) => {
//   nums1.sort((a, b) => a - b);
//   nums2.sort((a, b) => a - b);

//   let set = new Set();
//   let i = 0;
//   let j = 0;

//   while (i < nums1.length && j < nums2.length) {
//     let n1 = nums1[i];
//     let n2 = nums2[j];
//     if (n1 === n2) {
//       set.add(n1);
//       i++;
//       j++;
//     } else if (n1 < n2) {
//       i++;
//     } else {
//       j++;
//     }
//   }

//   return [...set];
// };

/**
 * 二分查找
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(n)
 */
// import { binarySearch } from "../../helper/array/utils";

// export default (nums1, nums2) => {
//   let short = nums1.length > nums2.length ? nums2 : nums1;
//   let long = short === nums1 ? nums2 : nums1;
//   let set = new Set();

//   long.sort((a, b) => a - b);

//   short.forEach(val => {
//     if (binarySearch(long, val) !== -1) {
//       set.add(val);
//     }
//   });

//   return [...set];
// };

export default (nums1, nums2) => {
  nums1 = new Set(nums1);
  let result = new Set(nums2.filter(n => nums1.has(n)));
  return [...result];
};

/**
 * time: O(nlogn)
 * space: O(1)
 */
// export default citations => {
//   citations.sort((a, b) => b - a);

//   let max = 0;
//   let len = citations.length;

//   // 只要满足 citations[i] > i 就可以
//   // 要找最大的 i
//   for (let i = 0; i < len; i++) {
//     if (citations[i] > i) {
//       max = Math.max(max, i + 1);
//     }
//   }
//   return max;
// };

export default citations => {
  citations.sort((a, b) => a - b);

  let i = 0;
  let len = citations.length;

  // 0 1 3 5 6
  while (i < len && citations[len - 1 - i] > i) {
    i++;
  }

  return i;
};

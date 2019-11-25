// leetcode 遇到长字符串会超时 O(n^3)
// export default str => {
//   if (str.length < 2) return str;
//   let isReverse = str =>
//     str ===
//     str
//       .split("")
//       .reverse()
//       .join("");

//   let res = "";
//   for (let i = 0, len = str.length; i < len - 1; i++) {
//     for (let j = i + 1; j < len + 1; j++) {
//       let cur = str.substring(i, j);
//       if (isReverse(cur) && cur.length > res.length) {
//         res = cur;
//       }
//     }
//   }
//   return res;
// };

// 动态规划
export default str => {
  let len = str.length;
  let dp = Array(len).fill([]);
};

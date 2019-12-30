// 暴力法
// let isPalindromic = str =>
//   str ===
//   str
//     .split("")
//     .reverse()
//     .join("");
// export default str => {
//   let res = "";
//   let max = 0;
//   let len = str.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j <= len; j++) {
//       let cur = str.substring(i, j);
//       if (isPalindromic(cur) && cur.length > max) {
//         res = cur;
//         max = Math.max(max, res.length);
//       }
//     }
//   }
//   return res;
// };

// 中心扩展

// 长字符串会超时
// export default s => {
//   let len = s.length;
//   let res = 0;

//   let isPalindromic = str =>
//     str ===
//     str
//       .split("")
//       .reverse()
//       .join("");

//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j <= len; j++) {
//       let cur = s.substring(i, j);
//       if (isPalindromic(cur)) res++;
//     }
//   }

//   return res;
// };

// 暴力法
let isPalindromic = str =>
  str ===
  str
    .split("")
    .reverse()
    .join("");
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

// 失败
// export default str => {
//   let res = "";
//   let max = 0;
//   let len = str.length;

//   if (len === 1) return str;

//   for (let j = 0; j <= len; j++) {
//     for (let i = 0; i < len; i++) {
//       let ai = str[i];
//       let aj = str[j];
//       if (ai === aj) {
//         if (i === j) {
//           j++;
//           i = 0;
//           continue;
//         } else if (j === i + 1) {
//           res = str.substring(i, j + 1);
//           max = Math.max(max, 2);
//         } else if (j > i && isPalindromic(str.substring(i, j + 1))) {
//           max = Math.max(max, j - i + 1);
//           res = str.substring(i, j + 1);
//         }
//       }
//       if (ai !== aj) {
//         continue;
//       }
//     }
//   }

//   return res;
// };

// 中心扩展
export default str => {
  if (str.length < 2) return str;
  let start = 0;
  let maxLength = 1;
  let len = str.length;

  const helper = (left, right) => {
    while (left >= 0 && right < len && str[left] === str[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < len; i++) {
    helper(i - 1, i + 1);
    helper(i, i + 1);
  }

  return str.substring(start, start + maxLength);
};

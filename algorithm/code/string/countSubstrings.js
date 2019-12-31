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

// 中心扩展
// export default s => {
//   let result = 0;
//   let len = s.length;

//   if (len < 2) return 1;

//   const helper = (left, right) => {
//     while (left >= 0 && right < len && s[left] === s[right]) {
//       result++;
//       left--;
//       right++;
//     }
//   };

//   for (let i = 0; i < len; i++) {
//     result++;
//     helper(i - 1, i + 1);
//     helper(i, i + 1);
//   }

//   return result;
// };

// 动态规划
export default s => {
  let result = 0;
  let len = s.length;
  let dp = [];
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false);
  }

  // 这样循环可以保证总是先判断子串是否回文
  for (let j = 0; j < len; j++) {
    for (let i = j; i >= 0; i--) {
      // 判断 j - i < 2，因为只有 aba 或 aa 这两种情况能确定一定是回文，如果长度太长，需要细化判断
      // dp[i + 1][j - 1], 如果子串两端相同，缩小范围继续判断
      if (s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        result++;
      }
    }
  }

  return result;
};

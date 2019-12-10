// leetcode 122
// export default prices => {
//   // 保存利润
//   let count = 0;

//   for (let i = 0, len = prices.length; i < len; i++) {
//     for (let j = i; j < len - 1; j++) {
//       if (prices[j + 1] > prices[j]) {
//         count += prices[j + 1] - prices[j];
//         i = j;
//       } else {
//         i = j;
//         break;
//       }
//     }
//   }

//   return count;
// };

export default prices => {
  // 保存利润
  let count = 0;

  for (let i = 1, len = prices.length; i < len; i++) {
    if (prices[i] > prices[i - 1]) {
      count += prices[i] - prices[i - 1];
    }
  }

  return count;
};

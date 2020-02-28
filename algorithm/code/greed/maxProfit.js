// 找到最小值之后的最大值
export default prices => {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  for (let i = 0, len = prices.length; i < len; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }
  return max;
};

// 数组两个元素的最大差等于求差数组的最大子序和
// export default prices => {
//   let last = 0;
//   let profit = 0;
//   for (let i = 0, len = prices.length - 1; i < len; i++) {
//     last = Math.max(0, last + prices[i + 1] - prices[i]);
//     profit = Math.max(profit, last);
//   }
//   return profit;
// };

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

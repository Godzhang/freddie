export default n => {
  let res = "";
  while (n > 0) {
    let y = n % 26;
    n = (n / 26) | 0;
    // 如果 n 是 26 的整数倍，需要特殊处理
    if (y === 0) {
      y = 26;
      n--;
    }
    res = String.fromCharCode(64 + y) + res;
  }
  return res;
};

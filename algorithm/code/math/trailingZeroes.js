// 求有多少个5
// 每25会多一个5，所以每次循环后要除以5
export default n => {
  let result = 0;
  while (n) {
    result += (n / 5) | 0;
    n = (n / 5) | 0;
  }
  return result;
};

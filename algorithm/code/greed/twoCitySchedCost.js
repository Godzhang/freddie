// 我们这样来看这个问题，公司首先将这 2N 个人全都安排飞往 BB 市，再选出 N 个人改变它们的行程，让他们飞往 A 市。
// 如果选择改变一个人的行程，那么公司将会额外付出 price_A - price_B 的费用，这个费用可正可负
// 因此最优的方案是，选出 price_A - price_B 最小的 NN 个人，让他们飞往 A 市，其余人飞往 B 市。
// export default costs => {
//   costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
//   let len = costs.length / 2;
//   let sum = 0;
//   for (let i = 0; i < len; i++) {
//     sum += costs[i][0] + costs[i + len][1];
//   }
//   return sum;
// };

// 排序规则：判断每两个人的组合差，1a+2b > 1b+2a，说明第一个人去a，第二个人去b更省钱
export default costs => {
  let half = costs.length / 2;
  let sum = 0;

  costs.sort((a, b) => a[0] + b[1] - (a[1] + b[0]));
  for (let i = 0; i < half; i++) {
    sum += costs[i][0] + costs[i + half][1];
  }
  return sum;
};

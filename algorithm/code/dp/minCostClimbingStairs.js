export default cost => {
  let pre = 0;
  let cur = 0;
  let len = cost.length;
  for (let i = 0; i < len; i++) {
    let tmp = cur;
    cur = Math.min(pre, cur) + cost[i];
    pre = tmp;
  }
  return Math.min(pre, cur);
};

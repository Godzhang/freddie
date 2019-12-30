export default n => {
  if (n === 0) return 0;
  let [prev, curr, next] = [0, 1, 1];
  let res = 1;
  for (let i = 3; i <= n; i++) {
    res = prev + curr + next;
    [prev, curr, next] = [curr, next, res];
  }
  return res;
};

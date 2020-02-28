export default (nums, k) => {
  const map = {};
  nums.forEach(val => {
    map[val] = map[val] ? map[val] + 1 : 1;
  });
  return Object.keys(map)
    .sort((a, b) => map[b] - map[a])
    .slice(0, k)
    .map(n => +n);
};

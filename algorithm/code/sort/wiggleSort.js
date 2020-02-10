/**
 * 使用倒序，可以防止相同的数字最后岔开
 * time: O(nlogn)
 * space: O(n)
 */
export default nums => {
  nums.sort((a, b) => b - a);

  let result = [];
  let len = nums.length;
  let mid = ~~(len / 2);
  let small = nums.slice(mid);
  let big = nums.slice(0, mid);

  while (small.length && big.length) {
    result.push(small.shift(), big.shift());
  }
  if (small.length) result.push(small.shift());

  result.forEach((n, i) => (nums[i] = n));

  return nums;
};

// 智商不够，暂时想不到其他解法

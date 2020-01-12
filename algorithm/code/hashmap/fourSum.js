export default (nums, target) => {
  let result = [];
  let len = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 3; ) {
    for (let j = i + 1; j < len - 2; ) {
      let first = j + 1;
      let last = len - 1;
      do {
        if (first >= last) break;
        let sum = nums[i] + nums[j] + nums[first] + nums[last];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[first], nums[last]]);
        }
        if (sum < target) {
          while (first < last && nums[first] === nums[++first]) {}
        } else {
          while (first < last && nums[last] === nums[--last]) {}
        }
      } while (first < last);
      while (nums[j] === nums[++j]) {}
    }
    while (nums[i] === nums[++i]) {}
  }

  return result;
};

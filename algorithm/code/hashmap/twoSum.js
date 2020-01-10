export default (nums, target) => {
  const map = {};

  for (let i = 0, len = nums.length; i < len; i++) {
    let cur = nums[i];
    let another = target - cur;
    if (another in map) {
      return [map[target - cur], i];
    }
    map[cur] = i;
  }
};

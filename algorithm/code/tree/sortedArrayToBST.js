import TreeNode from "../../helper/tree/TreeNode";

/**
 * time: O(n)
 * space: O(logn)
 */
const sortedArrayToBST = nums => {
  if (nums.length === 0) return null;
  // 对于偶数个数组，可以选择中点左边的值，或者右边的值，也可随机选左右，此处选右值
  let mid = ~~(nums.length / 2);
  let node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1));

  return node;
};

export default sortedArrayToBST;

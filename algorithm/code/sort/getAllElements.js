/**
 * 前序遍历 + 归并
 * time: O(m + n)
 * space: O(m + n)
 */
export default (root1, root2) => {
  let arr1 = [];
  let arr2 = [];
  let result = [];

  const getTreeData = (root, arr) => {
    if (root) {
      getTreeData(root.left, arr);
      arr.push(root.val);
      getTreeData(root.right, arr);
    }
  };
  getTreeData(root1, arr1);
  getTreeData(root2, arr2);

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  if (arr1.length) result.push(...arr1);
  if (arr2.length) result.push(...arr2);
  return result;
};

// 也可以遍历两棵树，放到同一个数组，再排序

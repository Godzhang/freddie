import TreeNode from "./TreeNode";

class BinaryTree {
  constructor() {
    this.root = null;
  }

  static from(arr) {
    if (!arr[0]) return null;

    let lastNotLeafNodeIndex = ~~(arr.length / 2 - 1);

    arr = arr.map(val => {
      return val ? new TreeNode(val) : val;
    });
    for (let i = 0, len = arr.length; i < len; i++) {
      let node = arr[i];
      // 只遍历到最后一个非叶子结点
      if (i > lastNotLeafNodeIndex) break;
      if (!node) continue;

      let leftIndex = 2 * i + 1;
      let rightIndex = 2 * i + 2;

      node.left = arr[leftIndex];
      node.right = arr[rightIndex];
    }
    this.root = arr[0];
    return this.root;
  }
}

export default BinaryTree;

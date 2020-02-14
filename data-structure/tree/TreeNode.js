class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  toString() {
    return this.val.toString();
  }
}

module.exports = TreeNode;

import TreeNode from "./TreeNode";

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new TreeNode(val);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (node.val < root.val) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  from(arr) {
    arr.forEach(val => val != null && this.insert(val));
    return this.root;
  }
}

export default BinarySearchTree;

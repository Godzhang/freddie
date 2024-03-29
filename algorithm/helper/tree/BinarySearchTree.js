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
      this._insertNode(this.root, node);
    }
  }

  _insertNode(root, node) {
    if (node.val < root.val) {
      if (root.left) {
        this._insertNode(root.left, node);
      } else {
        root.left = node;
      }
    } else {
      if (root.right) {
        this._insertNode(root.right, node);
      } else {
        root.right = node;
      }
    }
  }

  preOrderTraverse(callback) {
    this._preOrderTraverseNode(this.root, callback);
  }

  _preOrderTraverseNode(node, callback) {
    if (node) {
      callback(node.val);
      this._preOrderTraverseNode(node.left, callback);
      this._preOrderTraverseNode(node.right, callback);
    }
  }

  inOrderTraverse(callback) {
    this._inOrderTraverseNode(this.root, callback);
  }

  _inOrderTraverseNode(node, callback) {
    if (node) {
      this._inOrderTraverseNode(node.left, callback);
      callback(node.val);
      this._inOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback) {
    this._postOrderTraverseNode(this.root, callback);
  }

  _postOrderTraverseNode(node, callback) {
    if (node) {
      this._postOrderTraverseNode(node.left, callback);
      this._postOrderTraverseNode(node.right, callback);
      callback(node.val);
    }
  }

  search(val) {
    return this.searchNode(this.root, val);
  }

  searchNode(node, val) {
    if (!node) return false;

    if (val === node.val) {
      return true;
    } else if (val < node.val) {
      return this.searchNode(node.left, val);
    } else {
      return this.searchNode(node.right, val);
    }
  }

  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    let current = node;
    while (current && current.left) {
      current = current.left;
    }
    return current;
  }

  max() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    let current = node;
    while (current && current.right) {
      current = current.right;
    }
    return current;
  }

  remove(val) {
    this.root = this.removeNode(this.root, val);
  }

  removeNode(node, val) {
    if (!node) return null;

    if (val === node.val) {
      // 如果是叶子结点
      if (!node.left && !node.right) {
        node = null;
      } else if (!node.right) {
        // 只有左子结点
        node = node.left;
      } else if (!node.left) {
        // 只有右子结点
        node = node.right;
      } else {
        // 与右子树的最小值，(或与左子树最大值交换？)
        let minNode = this.minNode(node.right);
        node.val = minNode.val;
        node.right = this.removeNode(node.right, minNode.val);
      }
    } else if (val < node.val) {
      node.left = this.removeNode(node.left, val);
    } else {
      node.right = this.removeNode(node.right, val);
    }

    return node;
  }

  toString(traverseFn = "inOrderTraverse") {
    const arr = [];
    this[traverseFn](val => arr.push(val));
    return arr.join();
  }

  static from(arr) {
    const binarySearchTree = new BinarySearchTree();
    arr.forEach(val => val != null && binarySearchTree.insert(val));
    return binarySearchTree;
  }
}

export default BinarySearchTree;

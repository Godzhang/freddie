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
    this[traverseFn]((val) => arr.push(val));
    return arr.join();
  }

  static from(arr) {
    const binarySearchTree = new BinarySearchTree();
    arr.forEach((val) => val != null && binarySearchTree.insert(val));
    return binarySearchTree;
  }

  preOrderTraverseByStack(callback) {
    let node = this.root;
    const stack = [];

    while (node || stack.length) {
      // 迭代访问结点左子树，并入栈
      while (node) {
        stack.push(node);
        callback(node.val);
        node = node.left;
      }
      // 如果没有左子树，弹出栈顶元素，访问右子树
      if (stack.length) {
        node = stack.pop();
        node = node.right;
      }
    }
  }

  inOrderTraverseByStack(callback) {
    let node = this.root;
    const stack = [];

    while (node || stack.length) {
      while (node) {
        stack.push(node);
        node = node.left;
      }
      if (stack.length) {
        node = stack.pop();
        callback(node.val);
        node = node.right;
      }
    }
  }

  // postOrderTraverseStack(callback) {
  //   let node = this.root;
  //   const stack = [];
  //   const visitedNodes = {};

  //   while (node || stack.length) {
  //     while (node) {
  //       stack.push(node);
  //       node = node.left;
  //     }
  //     if (stack.length) {
  //       let last = stack[stack.length - 1];
  //       // 如果没有右子树 或 已经访问过右子树，出栈
  //       if (!last.right || visitedNodes[last.right.val]) {
  //         node = stack.pop();
  //         callback(node.val);
  //         node = null;
  //       } else {
  //         // 否则，继续遍历右子树，并将右子树记录为已访问状态
  //         node = last.right;
  //         visitedNodes[node.val] = true;
  //       }
  //     }
  //   }
  // }

  postOrderTraverseStack(callback) {
    let node = this.root;
    const stack = [];
    let lastNode = null;

    while (node || stack.length) {
      while (node) {
        stack.push(node);
        node = node.left;
      }
      if (stack.length) {
        let peek = stack[stack.length - 1];
        // lastNode 记录上一个出栈的结点，如果它是栈顶元素的右子结点，说明已访问过
        if (!peek.right || peek.right === lastNode) {
          node = stack.pop();
          callback(node.val);
          lastNode = node;
          node = null;
        } else {
          node = peek.right;
        }
      }
    }
  }

  // 层序遍历(广度优先遍历) 借助队列实现
  breadthFirstTraverse(callback) {
    let node = this.root;
    const queue = [node];

    while (queue.length) {
      node = queue.shift();
      callback(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
}

// 计算树的最大高度
const calcTreeHeight = (root) => {
  if (!root) return 0;
  return Math.max(calcTreeHeight(root.left), calcTreeHeight(root.right)) + 1;
};

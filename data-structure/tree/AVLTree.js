const TreeNode = require("./TreeNode");
const BinarySearchTree = require("./BinarySearchTree");

class AVLTree extends BinarySearchTree {
  constructor() {
    super();
    this.root = null;
    this.BalanceFactor = {
      UNBALANCED_RIGHT: 1,
      SLIGHTLY_UNBALANCED_RIGHT: 2,
      BALANCED: 3,
      SLIGHTLY_UNBALANCED_LEFT: 4,
      UNBALANCED_LEFT: 5
    };
  }

  getNodeHeight(node) {
    if (!node) return -1;
    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }

  // 计算平衡因子
  getBalanceFactor(node) {
    const heightDifference =
      this.getNodeHeight(node.left) - this.getNodeHeight(node.right);

    switch (heightDifference) {
      case -2:
        return this.BalanceFactor.UNBALANCED_RIGHT;
        break;
      case -1:
        return this.BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
        break;
      case 1:
        return this.BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
        break;
      case 2:
        return this.BalanceFactor.UNBALANCED_LEFT;
        break;
      default:
        return this.BalanceFactor.BALANCED;
    }
  }

  // 左左，向右的单旋转
  rotationLL(node) {
    let tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }

  // 右右，向左的单旋转
  rotationRR(node) {
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }

  // 左右，向右的双旋转(先LL,再RR)
  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  // 右左，向左的双旋转(先RR,再LL)
  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }

  insert(val) {
    this.root = this.insertNode(this.root, val);
  }

  insertNode(node, val) {
    if (!node) {
      return new TreeNode(val);
    } else if (val < node.val) {
      node.left = this.insertNode(node.left, val);
    } else if (val > node.val) {
      node.right = this.insertNode(node.right, val);
    } else {
      return node;
    }
    // 树平衡判断
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === this.BalanceFactor.UNBALANCED_LEFT) {
      // 如果插入左子树的左边，整体进行一次右旋
      // 如果插入左子树的右边，先把左子树左旋，再整体右旋
      if (val < node.left.val) {
        node = this.rotationLL(node);
      } else {
        return this.rotationLR(node);
      }
    }
    if (balanceFactor === this.BalanceFactor.UNBALANCED_RIGHT) {
      // 如果插入右子树的右边，整体进行一次左旋
      // 如果插入右子树的左边，先把右子树左旋，再整体左旋
      if (val > node.right.val) {
        node = this.rotationRR(node);
      } else {
        return this.rotationRL(node);
      }
    }
    return node;
  }

  removeNode(node, val) {
    node = super.removeNode(node, val);
    if (!node) return null;

    const balanceFactor = this.getBalanceFactor(node);
    // 如果结点左边比右边高2
    if (balanceFactor === this.BalanceFactor.UNBALANCED_LEFT) {
      // 计算结点左子树平衡因子
      const balanceFactorLeft = this.getBalanceFactor(node.left);
      // 如果左子树平衡或者左子树的左侧高1，node结点整体右旋
      if (
        balanceFactorLeft === this.BalanceFactor.BALANCED ||
        balanceFactorLeft === this.BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      ) {
        return this.rotationLL(node);
      }
      // 如果左子树右侧高
      if (balanceFactorLeft === this.BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node);
      }
    }
    if (balanceFactor === this.BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right);
      if (
        balanceFactorRight === this.BalanceFactor.BALANCED ||
        balanceFactorRight === this.BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      ) {
        return this.rotationRR(node);
      }
      // 如果左子树右侧高，
      if (balanceFactorRight === this.BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationRL(node);
      }
    }
    return node;
  }
}

module.exports = AVLTree;

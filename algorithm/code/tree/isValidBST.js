class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = undefined;
  }
}

class Tree {
  constructor(data) {
    let root = new Node(data.shift());

    data.forEach(item => {
      this.insert(root, item);
    });

    return root;
  }

  insert(node, data) {
    if (data < node.val) {
      if (node.left === undefined) {
        node.left = new Node(data);
      } else {
        this.insert(node.left, data);
      }
    } else {
      if (node.right === undefined) {
        node.right = new Node(data);
      } else {
        this.insert(node.right, data);
      }
    }
  }

  static walk(root) {
    if (!root.left && !root.right) {
      return true;
    } else if (
      (root.left && root.val < root.left.val) ||
      (root.right && root.val > root.right.val)
    ) {
      return false;
    } else {
      return Tree.walk(root.left) && Tree.walk(root.right);
    }
  }
}

export default Tree;
export { Node };

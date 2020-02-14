import BinarySearchTree from "./BinarySearchTree";

export const preOrderTraverseNode = (node, callback) => {
  if (node) {
    callback(node.val);
    preOrderTraverseNode(node.left, callback);
    preOrderTraverseNode(node.right, callback);
  }
};

export const inOrderTraverseNode = (node, callback) => {
  if (node) {
    inOrderTraverseNode(node.left, callback);
    callback(node.val);
    inOrderTraverseNode(node.right, callback);
  }
};

export const postOrderTraverseNode = (node, callback) => {
  if (node) {
    postOrderTraverseNode(node.left, callback);
    postOrderTraverseNode(node.right, callback);
    callback(node.val);
  }
};

export const toString = root => {
  const arr = [];
  inOrderTraverseNode(root, val => arr.push(val));
  return arr.join();
};

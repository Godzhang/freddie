/**
 * time: O(n)
 * space: O(n)
 */
// export default (p, q) => {
//   const queue = [p, q];

//   while (queue.length) {
//     let node1 = queue.shift();
//     let node2 = queue.shift();

//     if (!node1 && !node2) {
//       continue;
//     } else if (!node1 || !node2 || node1.val !== node2.val) {
//       return false;
//     }
//     queue.push(node1.left);
//     queue.push(node2.left);
//     queue.push(node1.right);
//     queue.push(node2.right);
//   }

//   return true;
// };

/**
 * time: O(n)
 * space: O(logn) ~ O(n)
 */
const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

export default isSameTree;

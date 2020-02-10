// export default head => {
//   if (head === null || head.next === null) return true;
//   let mid = head;
//   let pre = null;
//   let reversed = null;

//   while (head != null && head.next != null) {
//     pre = mid;

//     mid = mid.next;
//     head = head.next.next;

//     pre.next = reversed;
//     reversed = pre;
//   }

//   if (head) {
//     mid = mid.next;
//   }
//   while (mid) {
//     if (reversed.val !== mid.val) return false;
//     reversed = reversed.next;
//     mid = mid.next;
//   }
//   return true;
// };

// export default head => {
//   let mid = head;
//   let prev = null;
//   let reversed = null;

//   while (head && head.next) {
//     prev = mid;
//     mid = mid.next;
//     head = head.next.next;

//     prev.next = reversed;
//     reversed = prev;
//   }

//   if (head) {
//     mid = mid.next;
//   }
//   while (mid) {
//     if (reversed.val !== mid.val) return false;
//     reversed = reversed.next;
//     mid = mid.next;
//   }
//   return true;
// };

// 递归
// export default head => {
//   if (!head || !head.next) return true;

//   let curr = head;
//   let result = true;
//   const helper = node => {
//     if (node.next) helper(node.next);

//     if (curr.val !== node.val) {
//       result = false;
//       return;
//     } else {
//       curr = curr.next;
//     }
//   };
//   helper(curr);
//   return result;
// };

// 数组
export default head => {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  while (arr.length > 1) {
    if (arr.shift() !== arr.pop()) return false;
  }
  return true;
};

// export default (head, n) => {
//   let curr = head;
//   let len = 0;
//   // 计算链表长度
//   while (curr) {
//     len++;
//     curr = curr.next;
//   }
//   // 计算正向索引
//   let index = len - n;

//   let prev;
//   curr = head;

//   if (index === 0) {
//     head = head.next;
//   } else if (index === len - 1) {
//     while (curr.next) {
//       prev = curr;
//       curr = curr.next;
//     }
//     prev.next = null;
//   } else {
//     for (let i = 0; i < index; i++) {
//       prev = curr;
//       curr = curr.next;
//     }
//     prev.next = curr.next;
//   }
//   return head;
// };

// 使用数组索引
// export default (head, n) => {
//   let arr = [];
//   let curr = head;
//   while (curr) {
//     arr.push(curr);
//     curr = curr.next;
//   }
//   let len = arr.length;
//   if (len === n) {
//     head = head.next;
//   } else {
//     arr[len - n - 1].next = arr[len - n].next;
//   }
//   return head;
// };

// 双指针
import ListNode from "../../helper/chain/Node";

export default (head, n) => {
  let dummy = new ListNode(null);
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};

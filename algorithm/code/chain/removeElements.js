// import ListNode from "../../helper/chain/Node";

// export default (head, val) => {
//   let dummy = new ListNode(null);
//   dummy.next = head;

//   let prev = dummy;
//   while (head) {
//     if (head.val === val) {
//       prev.next = head.next;
//       head = prev.next;
//     } else {
//       prev = head;
//       head = head.next;
//     }
//   }

//   return dummy.next;
// };

// 递归
const removeElements = (head, val) => {
  if (!head) return head;

  head.next = removeElements(head.next, val);

  return head.val === val ? head.next : head;
};

export default removeElements;

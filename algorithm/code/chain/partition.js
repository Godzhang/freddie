// import ListNode from "../../helper/chain/Node";

// export default (head, x) => {
//   let small = null;
//   let smallPointer = null;
//   let big = null;
//   let bigPointer = null;

//   while (head) {
//     let node = new ListNode(head.val);
//     if (head.val < x) {
//       if (!small) {
//         small = node;
//       } else {
//         smallPointer = small;
//         while (smallPointer.next) {
//           smallPointer = smallPointer.next;
//         }
//         smallPointer.next = node;
//       }
//     } else {
//       if (!big) {
//         big = node;
//       } else {
//         bigPointer = big;
//         while (bigPointer.next) {
//           bigPointer = bigPointer.next;
//         }
//         bigPointer.next = node;
//       }
//     }

//     head = head.next;
//   }

//   if (small && !big) {
//     return small;
//   } else if (!small && big) {
//     return big;
//   } else if (small && big) {
//     if (smallPointer) {
//       smallPointer.next.next = big;
//     } else {
//       small.next = big;
//     }
//     return small;
//   } else {
//     return null;
//   }
// };

// import ListNode from "../../helper/chain/Node";

// export default (head, x) => {
//   if (!head || !head.next) return head;

//   let dummy = new ListNode(null);
//   dummy.next = head;
//   let prev = dummy;

//   let small = [];
//   let big = [];

//   while (head) {
//     if (head.val < x) {
//       small.push(head);
//     } else {
//       big.push(head);
//     }
//     head = head.next;
//   }

//   small.concat(big).forEach(node => {
//     prev.next = node;
//     prev = node;
//   });
//   prev.next = null;

//   return dummy.next;
// };

// import ListNode from "../../helper/chain/Node";

// export default (head, x) => {
//   if (!head || !head.next) return head;

//   let before = new ListNode(null);
//   let after = new ListNode(null);
//   let bp = before;
//   let ap = after;

//   while (head) {
//     if (head.val < x) {
//       bp.next = head;
//       bp = head;
//     } else {
//       ap.next = head;
//       ap = head;
//     }

//     head = head.next;
//   }

//   ap.next = null;
//   bp.next = after.next;

//   return before.next;
// };

export default (head, x) => {
  if (!head || !head.next) return head;

  let small = [];
  let big = [];
  let curr = head;

  while (curr) {
    if (curr.val < x) {
      small.push(curr.val);
    } else {
      big.push(curr.val);
    }
    curr = curr.next;
  }

  curr = head;

  small.concat(big).forEach(val => {
    curr.val = val;
    curr = curr.next;
  });
  return head;
};

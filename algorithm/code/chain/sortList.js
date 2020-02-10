// 递归归并
// 4 --> 2 --> 1 --> 3 --> null
// 4 --> 2 --> 1 --> 3 --> 5 --> null
// import ListNode from "../../helper/chain/Node";

// export default head => {
//   if (!head || !head.next) return head;

//   const mergeSort = head => {
//     if (!head.next) return head;

//     let mid = head;
//     let fast = head.next;

//     while (fast && fast.next) {
//       mid = mid.next;
//       fast = fast.next.next;
//     }
//     let midNext = mid.next;
//     mid.next = null;

//     return merge(mergeSort(head), mergeSort(midNext));
//   };

//   const merge = (left, right) => {
//     let head = new ListNode(null);
//     let curr = head;

//     while (left && right) {
//       if (left.val < right.val) {
//         curr.next = left;
//         left = left.next;
//       } else {
//         curr.next = right;
//         right = right.next;
//       }
//       curr = curr.next;
//     }

//     if (left) curr.next = left;
//     if (right) curr.next = right;

//     return head.next;
//   };

//   return mergeSort(head);
// };

import ListNode from "../../helper/chain/Node";

const sortList = head => {
  if (!head || !head.next) return head;

  let mid = head;
  let fast = head.next;

  while (fast && fast.next) {
    mid = mid.next;
    fast = fast.next.next;
  }
  let midNext = mid.next;
  mid.next = null;
  let left = sortList(head);
  let right = sortList(midNext);

  let tmp = new ListNode(null);
  let curr = tmp;

  while (left && right) {
    if (left.val < right.val) {
      curr.next = left;
      left = left.next;
    } else {
      curr.next = right;
      right = right.next;
    }
    curr = curr.next;
  }

  if (left) curr.next = left;
  if (right) curr.next = right;

  return tmp.next;
};

export default sortList;

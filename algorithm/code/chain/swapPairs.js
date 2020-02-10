// export default head => {
//   if (!head || !head.next) return head;

//   let prev = null;
//   let curr = head;
//   let next = head.next;
//   let feature = next.next;

//   curr.next = feature;
//   next.next = curr;
//   head = next;

//   while (feature && feature.next) {
//     prev = curr;
//     curr = feature;
//     next = curr.next;
//     feature = next.next;

//     prev.next = next;
//     next.next = curr;
//     curr.next = feature;
//   }

//   return head;
// };

// 递归
// const swapPairs = head => {
//   if (!head || !head.next) return head;

//   let firstNode = head;
//   let secondNode = head.next;

//   firstNode.next = swapPairs(secondNode.next);
//   secondNode.next = firstNode;

//   return secondNode;
// };

// export default swapPairs;

// 迭代
import ListNode from "../../helper/chain/Node";

export default head => {
  let dummy = new ListNode(null);
  dummy.next = head;

  let prevNode = dummy;
  let firstNode;
  let secondNode;

  while (head && head.next) {
    firstNode = head;
    secondNode = head.next;

    prevNode.next = secondNode;
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;

    prevNode = firstNode;
    head = firstNode.next;
  }

  return dummy.next;
};

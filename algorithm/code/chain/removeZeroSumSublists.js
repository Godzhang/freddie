import ListNode from "../../helper/chain/Node";

export default head => {
  let dummy = new ListNode(0);
  dummy.next = head;

  let map = new Map();

  let sum = 0;
  for (let curr = dummy; curr !== null; curr = curr.next) {
    sum += curr.val;
    map.set(sum, curr);
  }

  sum = 0;
  for (let curr = dummy; curr !== null; curr = curr.next) {
    sum += curr.val;
    curr.next = map.get(sum).next;
  }

  return dummy.next;
};

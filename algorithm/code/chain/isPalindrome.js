export default head => {
  if (head === null || head.next === null) return true;
  let mid = head;
  let pre = null;
  let reversed = null;

  while (head != null && head.next != null) {
    pre = mid;

    mid = mid.next;
    head = head.next.next;

    pre.next = reversed;
    reversed = pre;
  }

  if (head) {
    mid = mid.next;
  }
  while (mid) {
    if (reversed.val !== mid.val) return false;
    reversed = reversed.next;
    mid = mid.next;
  }
  return true;
};

// 反转链表
const reverseChain = head => {
  if (!head || !head.next) return head;
  let prev = null;
  let temp = head;

  while (head) {
    head = head.next;
    temp.next = prev;
    prev = temp;
    temp = head;
  }

  return prev;
};

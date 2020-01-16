class ListNode {
  constructor(value) {
    this.val = value;
    this.next = undefined;
  }
}
class NodeList {
  constructor(arr) {
    let head = new ListNode(arr.shift());
    let next = head;
    arr.forEach(item => {
      next.next = new ListNode(item);
      next = next.next;
    });
    return head;
  }
}

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

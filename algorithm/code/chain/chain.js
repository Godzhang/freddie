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

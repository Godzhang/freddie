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

export default arr => {
  let head = new NodeList(arr);
  let result = [head.val];
  let prev = head.val;
  while (head.next) {
    if (prev === head.next.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
      prev = head.val;
      result.push(prev);
    }
  }
  return result;
};

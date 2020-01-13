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
  let thead = new ListNode("null");
  thead.next = new NodeList(arr);
  let prev = null;
  let cur = thead;
  let result = [];

  while (cur) {
    prev = cur;
    if (prev.val !== "null") {
      result.push(prev.val);
    }
    cur = cur.next;
    while (cur && cur.next && cur.val === cur.next.val) {
      let t = cur.val;
      while (cur && cur.val === t) {
        cur = cur.next;
      }
      prev.next = cur;
    }
  }
  return result;
};

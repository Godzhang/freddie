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

// 计算链表中环的长度
export const cycleLength = head => {
  let s = head;
  let f = head;
  let result = 0;

  // 先找到第一个重合点
  while (s && f.next) {
    s = s.next;
    f = f.next.next;
    if (s === f) {
      break;
    }
  }
  // 再走一遍环，即是环的长度
  while (s && f.next) {
    s = s.next;
    f = f.next.next;
    result++;
    if (s === f) {
      break;
    }
  }
  return result;
};

// 求出链表中环的入环点
export const cycleStart = head => {
  let s = head;
  let f = head;
  // 先找到第一个重合点
  while (s && f.next) {
    s = s.next;
    f = f.next.next;
    if (s === f) {
      break;
    }
  }
  // 将一个指向头结点，每次走一步，即能在入环点相遇
  f = head;
  while (s && f) {
    if (s === f) {
      return s;
    }
    s = s.next;
    f = f.next;
  }
};

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
// 内存消耗大, 本地测试版本
// export default (arr1, arr2) => {
//   let l1 = new NodeList(arr1);
//   let l2 = new NodeList(arr2);
//   let num1 = [];
//   let num2 = [];
//   while (l1) {
//     num1.push(l1.val);
//     l1 = l1.next;
//   }
//   while (l2) {
//     num2.push(l2.val);
//     l2 = l2.next;
//   }
//   let len = Math.max(num1.length, num2.length);
//   let isCarry = false;
//   let result = [];
//   for (let i = 0; i < len; i++) {
//     let sum = (num1[i] || 0) + (num2[i] || 0);
//     if (isCarry) {
//       sum++;
//       isCarry = false;
//     }
//     if (sum >= 10) {
//       isCarry = true;
//       sum -= 10;
//     }
//     result[i] = +sum;
//   }
//   if (isCarry) {
//     result.push(1);
//   }
//   return result;
// };

// leetcode 通过版本
export default (arr1, arr2) => {
  let l1 = new NodeList(arr1);
  let l2 = new NodeList(arr2);
  let pointer = new ListNode();
  let head = pointer;
  let carry = 0;

  while (l1 || l2) {
    let cur = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    if (cur > 9) {
      cur = cur - 10;
      carry = 1;
    } else {
      carry = 0;
    }
    pointer.next = new ListNode(cur);
    pointer = pointer.next;

    l1 = l1 ? l1.next : undefined;
    l2 = l2 ? l2.next : undefined;
  }
  if (carry) {
    pointer.next = new ListNode(1);
  }

  return head.next;
};

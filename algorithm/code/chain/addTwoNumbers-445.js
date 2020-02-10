import ListNode from "../../helper/chain/Node";

export default (l1, l2) => {
  let carry = 0;
  let arr1 = [];
  let arr2 = [];
  while (l1) {
    arr1.push(l1);
    l1 = l1.next;
  }
  while (l2) {
    arr2.push(l2);
    l2 = l2.next;
  }
  let result = [];
  while (arr1.length || arr2.length) {
    let a1 = arr1.length ? arr1.pop().val : 0;
    let a2 = arr2.length ? arr2.pop().val : 0;
    let sum = a1 + a2 + carry;
    if (sum > 9) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    result.unshift(new ListNode(sum));
  }
  if (carry) {
    result.unshift(new ListNode(1));
  }

  for (let i = 0, len = result.length; i < len - 1; i++) {
    result[i].next = result[i + 1];
  }
  return result[0];
};

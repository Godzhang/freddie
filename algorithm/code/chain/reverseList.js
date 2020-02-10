// 递归
// 1 --> 2 --> 3 --> 4 --> 5 --> null
// const reverseList = head => {
//   if (!head || !head.next) return head;

//   let node = reverseList(head.next);

//   let tail = head.next;
//   tail.next = head;
//   head.next = null;

//   return node;
// };

// export default reverseList;

// 迭代
export default head => {
  if (!head || !head.next) return head;

  let prev = null;
  let curr = head;

  while (curr) {
    let tmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tmp;
  }

  return prev;
};

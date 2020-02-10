// export default head => {
//   let arr = [];
//   let curr = head;
//   while (curr) {
//     arr.push(curr);
//     curr = curr.next;
//   }
//   let len = arr.length;
//   let start = 0;
//   let end = len - 1;

//   if (len < 3) {
//     return head;
//   }

//   // 1 --> 2 --> 3 --> 4 --> null
//   // 1 --> 2 --> 3 --> 4 --> 5 --> null
//   while (start < end) {
//     arr[start].next = arr[end];
//     if (end > start + 1) {
//       arr[end].next = arr[start + 1];
//     }
//     start++;
//     end--;
//   }
//   arr[start].next = null;
//   return head;
// };

export default head => {
  if (!head || !head.next || !head.next.next) {
    return head;
  }
  let len = 0;
  let curr = head;
  while (curr) {
    len++;
    curr = curr.next;
  }

  // 1 --> 2 --> 3 --> 4 --> null
  // 1 --> 2 --> 3 --> 4 --> 5 --> null
  const helper = (head, len) => {
    if (len === 1) {
      let outTail = head.next;
      head.next = null;
      return outTail;
    }

    if (len === 2) {
      let outTail = head.next.next;
      head.next.next = null;
      return outTail;
    }

    let tail = helper(head.next, len - 2);
    let subHead = head.next;
    head.next = tail;
    let outTail = tail.next;
    tail.next = subHead;
    return outTail;
  };

  helper(head, len);
  return head;
};

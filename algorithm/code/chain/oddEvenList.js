// odd 奇数 even 偶数
// 1 --> 2 --> 3 --> 4 --> 5 --> null
export default head => {
  if (!head || !head.next || !head.next.next) {
    return head;
  }

  let odd = head;
  let even = head.next;
  let nextOdd = head.next.next;

  while (nextOdd) {
    let currOdd = nextOdd;
    nextOdd = nextOdd.next && nextOdd.next.next;

    even.next = currOdd.next;
    currOdd.next = odd.next;
    odd.next = currOdd;

    odd = odd.next;
    even = even.next;
  }

  return head;
};

//
// 1 --> 2 --> 3 --> 4 --> 5 --> null
// export default head => {
//   if (!head || !head.next || !head.next.next) {
//     return head;
//   }

//   let curr = head.next.next;
//   let odd = head;
//   let evenHead = head.next;
//   let even = evenHead;
//   let count = 3;

//   while (curr) {
//     if (count % 2 === 1) {
//       odd.next = curr;
//       odd = curr;
//     } else {
//       even.next = curr;
//       even = curr;
//     }
//     curr = curr.next;
//     count++;
//   }

//   odd.next = evenHead;
//   even.next = null;

//   return head;
// };

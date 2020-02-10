// export default head => {
//   if (!head.next) return head;

//   let mid = head;
//   let fast = head;

//   while (fast && fast.next) {
//     mid = mid.next;
//     fast = fast.next.next;
//   }

//   return mid;
// };

export default head => {
  let arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }
  return arr[~~(arr.length / 2)];
};

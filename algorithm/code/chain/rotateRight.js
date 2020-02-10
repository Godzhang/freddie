// export default (head, k) => {
//   let len = 0;
//   let curr = head;
//   while (curr) {
//     len++;
//     curr = curr.next;
//   }

//   if (k === 0 || len === 0) return head;

//   k = len - (k % len);
//   curr = head;

//   if (k === len) {
//     return head;
//   } else {
//     let prev;
//     for (let i = 0; i < k; i++) {
//       prev = head;
//       head = head.next;
//     }
//     prev.next = null;
//     let pointer = head;
//     while (pointer.next) {
//       pointer = pointer.next;
//     }
//     pointer.next = curr;
//   }
//   return head;
// };

// 使用数组保存每一项,只需遍历一次
// export default (head, k) => {
//   if (!head || k === 0) return head;

//   let arr = [];
//   let curr = head;
//   let len = 0;

//   while (curr) {
//     arr.push(curr);
//     curr = curr.next;
//   }
//   if ((len = arr.length) === 0 || (k %= len) === 0) return head;

//   arr[len - 1].next = arr[0];
//   arr[len - k - 1].next = null;
//   head = arr[len - k];

//   return head;
// };

//
export default (head, k) => {
  if (!head || k === 0) return head;

  let curr = head;
  let prev;
  let len = 0;
  while (curr) {
    len++;
    prev = curr;
    curr = curr.next;
  }
  if (len === 0 || (k %= len) === 0) return head;

  prev.next = head;
  for (let i = 0, l = len - k; i < l; i++) {
    prev = head;
    head = head.next;
  }
  prev.next = null;
  return head;
};

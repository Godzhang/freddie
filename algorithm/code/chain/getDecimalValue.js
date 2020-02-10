// export default head => {
//   let arr = [];
//   while (head) {
//     arr.push(head.val);
//     head = head.next;
//   }
//   let sum = 0;
//   for (let i = 0, len = arr.length; i < len; i++) {
//     sum += arr[i] * Math.pow(2, len - i - 1);
//   }
//   return sum;
// };

// 递归
// export default head => {
//   let pow = 0;
//   let sum = 0;

//   const helper = head => {
//     if (head.next) helper(head.next);
//     sum += head.val * Math.pow(2, pow++);
//   };
//   helper(head);

//   return sum;
// };

// parseInt
// export default head => {
//   let str = "";
//   while (head) {
//     str += head.val;
//     head = head.next;
//   }
//   return parseInt(str, 2);
// };

//
export default head => {
  let sum = 0;
  while (head) {
    sum = sum * 2 + head.val;
    head = head.next;
  }
  return sum;
};

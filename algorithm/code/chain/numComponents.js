// export default (head, G) => {
//   let prevIsIn = false;
//   let count = 0;
//   while (head) {
//     if (G.includes(head.val)) {
//       if (!prevIsIn) {
//         prevIsIn = true;
//         count++;
//       }
//     } else {
//       prevIsIn = false;
//     }
//     head = head.next;
//   }
//   return count;
// };

// 使用 Map 更快
export default (head, G) => {
  let count = 0;

  let obj = {};
  G.forEach(val => {
    obj[val] = true;
  });

  while (head) {
    if (obj[head.val]) {
      while (head && obj[head.val]) {
        head = head.next;
      }
      count++;
    }
    head = head && head.next;
  }
  return count;
};

// 速度慢
// export default arr => {
//   let i = 0;
//   let prev;
//   let cur = arr[i];

//   for (let len = arr.length; i < len; i++) {
//     cur = arr[i];
//     if (cur === prev) {
//       continue;
//     } else {
//       prev = cur;
//     }
//     if (arr.indexOf(cur) === arr.lastIndexOf(cur)) {
//       return cur;
//     }
//   }
// };

export default arr => {
  let m = 0;
  let n = 0;
  for (let i = 0, len = arr.length; i < len; i++) {
    m = m ^ (arr[i] & ~n);
    n = n ^ (arr[i] & ~m);
  }
  return m;
};

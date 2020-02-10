// export default arr => {
//   arr.sort((a, b) => a - b);
//   // 存储奇偶排序后的数组
//   let r = [];
//   // 记录奇数偶数位下标
//   let even = 0;
//   let odd = 1;

//   arr.forEach(item => {
//     if (item % 2 === 0) {
//       r[even] = item;
//       even += 2;
//     } else {
//       r[odd] = item;
//       odd += 2;
//     }
//   });

//   return r;
// };

export default arr => {
  let even = 0;
  let odd = 1;
  let len = arr.length;
  while (true) {
    while (even < len && arr[even] % 2 === 0) {
      even += 2;
    }
    if (even >= len) return arr;

    while (odd < len && arr[odd] % 2 === 1) {
      odd += 2;
    }
    if (odd >= len) return arr;

    [arr[odd], arr[even]] = [arr[even], arr[odd]];
  }
};

// export default arr => {
//   let result = [];
//   let len = arr.length;
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (arr[j] > arr[i]) {
//         result[i] = j - i;
//         break;
//       }
//     }
//     result[i] = result[i] || 0;
//   }
//   return result.concat(0);
// };

export default arr => {
  let len = arr.length;
  let result = new Array(len).fill(0);
  let stack = [];

  for (let i = 0; i < len; i++) {
    while (stack.length && arr[i] > arr[stack[0]]) {
      let t = stack.shift();
      result[t] = i - t;
    }
    stack.unshift(i);
  }

  return result;
};

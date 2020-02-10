// export default arr => {
//   let result = [];
//   let prev1;
//   let prev2;
//   arr.forEach(item => {
//     switch (item) {
//       case "C":
//         if (result.length) {
//           result.pop();
//         }
//         break;
//       case "D":
//         prev1 = result.pop();
//         result.push(prev1, prev1 * 2);
//         break;
//       case "+":
//         prev1 = result.pop();
//         prev2 = result.pop();
//         result.push(prev2, prev1, prev2 + prev1);
//         break;
//       default:
//         result.push(+item);
//     }
//   });
//   return result.reduce((sum, cur) => {
//     return sum + cur;
//   }, 0);
// };

// in-place
export default ops => {
  for (let i = 0; i < ops.length; i++) {
    let o = ops[i];
    if (o === "C") {
      ops.splice(i - 1, 2);
      i -= 2;
    } else if (o === "D") {
      ops[i] = ops[i - 1] * 2;
    } else if (o === "+") {
      ops[i] = ops[i - 1] + ops[i - 2];
    } else {
      ops[i] = +ops[i];
    }
  }

  return ops.reduce((sum, curr) => {
    return sum + curr;
  }, 0);
};

// export default s => {
//   let l = 0;
//   let r = 0;
//   let i = 0;
//   let len = s.length;
//   let result = 0;

//   while (i < len) {
//     if (s[i] === "L") {
//       l++;
//     } else if (s[i] === "R") {
//       r++;
//     }
//     if (l === r) {
//       result++;
//       l = 0;
//       r = 0;
//     }
//     i++;
//   }

//   return result;
// };

// 上例优化
export default s => {
  let r = 0;
  let i = 0;
  let len = s.length;
  let result = 0;

  while (i < len) {
    if (s[i] === "R") {
      r++;
    } else {
      r--;
    }
    if (r === 0) {
      result++;
    }
    i++;
  }

  return result;
};

/**
 * 用栈的思想
 */
// export default s => {
//   const stack = [];
//   let result = 0;
//   for (let i = 0, len = s.length; i < len; i++) {
//     if (!stack.length) {
//       stack.push(s[i]);
//     } else {
//       if (stack[stack.length - 1] !== s[i]) {
//         stack.pop();
//       } else {
//         stack.push(s[i]);
//       }
//     }
//     if (!stack.length) {
//       result++;
//     }
//   }
//   return result;
// };

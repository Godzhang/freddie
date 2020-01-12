// export default s => {
//   let stack = [];

//   let map = new Map([[")", "("], ["]", "["], ["}", "{"]]);

//   for (let i = 0, len = s.length; i < len; i++) {
//     let cur = s[i];
//     let prev = stack[stack.length - 1] || "";

//     if (prev === map.get(cur)) {
//       stack.pop();
//     } else {
//       stack.push(cur);
//     }
//   }

//   return !stack.length;
// };

// export default s => {
//   if (s.length % 2 !== 0) return false;

//   let stack = [];

//   let map = {
//     ")": "(",
//     "]": "[",
//     "}": "{"
//   };

//   for (let i = 0, len = s.length; i < len; i++) {
//     let cur = s[i];
//     let prev = stack[stack.length - 1] || "";

//     if (i === 0 && map[cur]) return false;

//     if (!map[cur]) {
//       stack.push(cur);
//     } else {
//       if (prev === map[cur]) {
//         stack.pop();
//       } else {
//         stack.push(cur);
//       }
//     }
//   }

//   return !stack.length;
// };

export default s => {
  let reg = /\(\)|\[\]|\{\}/;

  while (reg.test(s)) {
    s = s
      .replace("()", "")
      .replace("[]", "")
      .replace("{}", "");
  }
  return !s.length;
};

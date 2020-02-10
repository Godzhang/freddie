// export default S => {
//   let left = 0;
//   let res = "";
//   for (let i = 0, len = S.length; i < len; i++) {
//     if (S[i] === "(" && left++ > 0) {
//       res += "(";
//     }
//     if (S[i] === ")" && --left > 0) {
//       res += ")";
//     }
//   }
//   return res;
// };

// export default S => {
//   let level = 0;
//   let res = "";
//   for (let i = 0, len = S.length; i < len; i++) {
//     if (S[i] === ")") --level;
//     if (level > 0) res += S[i];
//     if (S[i] === "(") ++level;
//   }
//   return res;
// };

export default S => {
  let res = "";
  let group = "";
  let stack = [];
  for (let i = 0, len = S.length; i < len; i++) {
    if (S[i] === "(") {
      stack.push("(");
    } else {
      stack.pop();
    }
    group += S[i];
    if (stack.length === 0) {
      res += group.substring(1, group.length - 1);
      group = "";
    }
  }
  return res;
};

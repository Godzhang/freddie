// 贪心，字符串转数组
// export default (s, t) => {
//   if (s.length === 0) return true;
//   let sStack = s.split("");
//   let tStack = t.split("");
//   while (sStack.length > 0) {
//     let tItem = tStack.pop();
//     if (tItem === sStack[sStack.length - 1]) {
//       sStack.pop();
//       if (sStack.length === 0) return true;
//     }
//   }
//   return false;
// };

// 贪心，字符串指针
// export default (s, t) => {
//   if (s.length === 0) return true;
//   let sPos = 0;
//   let tPos = 0;
//   let sLen = s.length;
//   let tLen = t.length;

//   while (tPos < tLen) {
//     if (t[tPos] === s[sPos]) sPos++;
//     if (sPos === sLen) return true;
//     tPos++;
//   }
//   return false;
// };

export default (s, t) => {
  let index = -1;
  for (let char of s) {
    index = t.indexOf(char, index + 1);
    if (index === -1) return false;
  }
  return true;
};

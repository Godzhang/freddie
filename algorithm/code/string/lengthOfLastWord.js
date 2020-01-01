// 要考虑前后有空格的情况
// ''
// 'a'
// 'a ', ' a'
// 'a b c'

// export default s => {
//   let arr = s.trim().split(" ");
//   return arr.length ? arr.pop().length : 0;
// };

// export default s => {
//   let reg = /\s?(\w*?)$/;
//   let match = s.trim().match(reg);
//   return match ? match[1].length : 0;
// };

// export default s => {
//   s = s.trim();
//   let index = s.lastIndexOf(" ");
//   if (index === -1) {
//     return s.length;
//   } else {
//     return s.slice(index + 1).length;
//   }
// };

export default s => {
  s = s.trim();
  let res = 0;
  let len = s.length;
  for (let i = len - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      res++;
    } else {
      return res;
    }
  }
  return res;
};

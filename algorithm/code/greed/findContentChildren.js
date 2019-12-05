// export default (g, s) => {
//   let count = 0;

//   s.sort((a, b) => a - b);

//   for (let i = 0, len = g.length; i < len; i++) {
//     let cur = g[i];
//     let sIndex = s.findIndex(item => item >= cur);
//     if (sIndex >= 0) {
//       count++;
//       s.splice(sIndex, 1);
//     }
//   }

//   return count;
// };

export default (g, s) => {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let gLen = g.length;
  let sLen = s.length;
  let i = 0;
  let j = 0;
  let count = 0;

  while (i < gLen && j < sLen) {
    if (s[j] >= g[i]) {
      i++;
      j++;
      count++;
    } else {
      j++;
    }
  }

  return count;
};

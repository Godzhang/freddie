// export default (s, t) => {
//   let sArr = s.split("");
//   let tArr = t.split("");
//   const sortFn = (a, b) => {
//     return a.charCodeAt() - b.charCodeAt();
//   };
//   sArr.sort(sortFn);
//   tArr.sort(sortFn);

//   return sArr.join("") === tArr.join("");
// };

// 此算法耗时长
// export default (s, t) => {
//   if (s.length !== t.length) return false;
//   for (let i = 0, slen = s.length; i < slen; i++) {
//     let w = t.indexOf(s[i]);
//     if (w > -1) {
//       t = t.slice(0, w) + t.slice(w + 1);
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

export default (s, t) => {
  if (s.length !== t.length) return false;
  let map = {};
  for (let i = 0, slen = s.length; i < slen; i++) {
    if (!map[s[i]]) map[s[i]] = 0;
    if (!map[t[i]]) map[t[i]] = 0;
    map[s[i]]++;
    map[t[i]]--;
  }
  for (let r in map) {
    if (map[r]) {
      return false;
    }
  }
  return true;
};

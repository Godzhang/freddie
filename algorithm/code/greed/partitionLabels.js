// export default S => {
//   const map = {};
//   const set = [];
//   const result = [];
//   for (let i = 0, len = S.length; i < len; i++) {
//     let s = S[i];
//     if (!map[s]) {
//       map[s] = [i, i];
//     } else {
//       if (i > map[s][1]) {
//         map[s][1] = i;
//       }
//     }
//   }
//   for (let key in map) {
//     set.push(map[key]);
//   }
//   let prev = 0;
//   let curr = 1;
//   while (curr < set.length) {
//     let [p0, p1] = set[prev];
//     let [c0, c1] = set[curr];
//     if (c0 < p1 && c1 <= p1) {
//       curr++;
//     } else if (c0 <= p1) {
//       set[prev][1] = c1;
//       curr++;
//     } else if (c0 > p1) {
//       result.push(set[prev]);
//       prev = curr;
//       curr++;
//     }
//   }
//   result.push(set[prev]);
//   return result.map(item => item[1] - item[0] + 1);
// };

export default S => {
  const obj = {};
  const result = [];
  let start = 0;
  let end = 0;
  for (let i = 0, len = S.length; i < len; i++) {
    obj[S[i]] = i;
  }
  for (let i = 0, len = S.length; i < len; i++) {
    end = Math.max(end, obj[S[i]]);
    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }
  return result;
};

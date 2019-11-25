// 用时长
// export default str => {
//   let r = [];
//   let max = 0;
//   let recersion = str => {
//     r = []; // 也用字符串
//     for (let i = 0, l = str.length; i < l; i++) {
//       if (!r.includes(str[i])) {
//         r.push(str[i]);
//       } else {
//         break;
//       }
//     }
//     max = Math.max(max, r.length);
//     if (str.length > max + 1) {
//       recersion(str.slice(1));
//     }
//   };
//   recersion(str);
//   return max;
// };

export default str => {
  let num = 0;
  let res = 0;
  let m = "";
  for (let n of str) {
    if (m.indexOf(n) === -1) {
      m += n;
      num++;
      res = Math.max(res, num);
    } else {
      m += n;
      // 如果有重复的，就从之前重复的字母的下一位开始计算长度，遇到重复的就从第一个重复的字符下一位开始计算
      m = m.slice(m.indexOf(n) + 1);
      num = m.length;
    }
  }
  return res;
};

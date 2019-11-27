// export default n => {
//   let reg = /(\d)\1*/g;
//   let anaylsis = n => {
//     n = n + "";
//     let p = reg.exec(n);
//     let res = "";
//     while (p) {
//       res += `${p[0].length}${p[1]}`;
//       p = reg.exec(n);
//     }
//     return res;
//   };
//   let helper = n => {
//     if (n === 1) {
//       return "1";
//     } else {
//       return anaylsis(helper(n - 1));
//     }
//   };
//   return helper(n);
// };

export default n => {
  let prev = "1";
  for (let i = 1; i < n; i++) {
    prev = prev.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`);
  }
  return prev;
};

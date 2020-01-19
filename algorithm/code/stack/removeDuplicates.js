// export default s => {
//   let reg = /(\w)\1/g;
//   while (reg.test(s)) {
//     s = s.replace(reg, "");
//   }
//   return s;
// };

export default s => {
  let len = s.length;
  let arr = [];
  let last = null;
  for (let i = 0; i < len; i++) {
    if (last === s[i]) {
      arr.pop();
      last = arr[arr.length - 1] || "";
    } else {
      last = s[i];
      arr.push(last);
    }
  }
  return arr.join("");
};

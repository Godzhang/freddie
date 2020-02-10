// export default s => {
//   while (s.indexOf("[") > -1) {
//     s = s.replace(/(\d+)\[(\w+)\]/g, (match, count, str) => {
//       return str.repeat(count);
//     });
//   }
//   return s;
// };

/**
 * 栈
 */
export default s => {
  const stack = [];
  let len = s.length;
  let res = "";
  let multi = 0;

  for (let i = 0; i < len; i++) {
    if (s[i] === "[") {
      stack.push([multi, res]);
      multi = 0;
      res = "";
    } else if (s[i] === "]") {
      let [count, str] = stack.pop();
      res = str + res.repeat(count);
    } else if (s[i] >= "0" && s[i] <= "9") {
      multi = multi * 10 + Number(s[i]);
    } else {
      res += s[i];
    }
  }

  return res;
};

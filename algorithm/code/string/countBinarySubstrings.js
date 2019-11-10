export default str => {
  let result = [];

  // 给定任意输入都返回第一个符合条件的子串
  const match = str => {
    let j = str.match(/^(0+|1+)/)[0];
    let o = (j[0] ^ 1).toString().repeat(j.length);
    let reg = new RegExp(`^(${j}${o})`);
    if (reg.test(str)) {
      return RegExp.$1;
    } else {
      return "";
    }
  };

  for (let i = 0, len = str.length - 1; i < len; i++) {
    let sub = match(str.slice(i));
    if (sub) {
      result.push(sub);
    }
  }

  return result.length;
};

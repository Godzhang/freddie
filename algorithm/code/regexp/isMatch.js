export default (s, p) => {
  let isMatch = (s, p) => {
    // 边界情况，如果 s 和 p 都为空，说明处理结束了，返回 true，否则返回false
    if (p.length === 0) {
      return !s.length;
    }
    // 判断 p 模式字符串的第一个字符和 s 字符串的第一个字符是不是匹配
    let match = false;
    if (s.length > 0 && (p[0] === s[0] || p[0] === ".")) {
      match = true;
    }
    // p 有模式的
    if (p.length > 1 && p[1] === "*") {
      // 第一种情况：s* 匹配0个字符
      // 第二种情况：s* 匹配1个字符，递归下去，用来表示s匹配多个s
      return isMatch(s, p.slice(2)) || (match && isMatch(s.slice(1), p));
    } else {
      return match && isMatch(s.slice(1), p.slice(1));
    }
  };
  return isMatch(s, p);
};

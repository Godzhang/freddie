export default (s, t) => {
  let reg = /\w#/;
  let clearReg = /^#+/;
  while (reg.test(s) || reg.test(t)) {
    s = s.replace(reg, "");
    t = t.replace(reg, "");
  }
  if (s[0] === "#") {
    s = s.replace(clearReg, "");
  }
  if (t[0] === "#") {
    t = t.replace(clearReg, "");
  }
  return s === t;
};

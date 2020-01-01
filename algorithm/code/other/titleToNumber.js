export default s => {
  let result = 0;
  let len = s.length;
  for (let i = 0, len = s.length; i < len; i++) {
    let code = s[i].charCodeAt() - 64;
    result += code * Math.pow(26, len - i - 1);
  }
  return result;
};

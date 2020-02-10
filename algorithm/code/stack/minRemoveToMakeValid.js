export default s => {
  let res = "";
  let invalidIndex = [];
  let stack = [];

  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === "(") {
      stack.push(i);
      invalidIndex[i] = true;
    }
    if (s[i] === ")") {
      if (!stack.length) {
        invalidIndex[i] = true;
      } else {
        invalidIndex[stack.pop()] = false;
      }
    }
  }

  for (let i = 0, len = s.length; i < len; i++) {
    if (!invalidIndex[i]) {
      res += s[i];
    }
  }

  return res;
};

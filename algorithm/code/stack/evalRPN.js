/**
 * time: O(n)
 * space: O(n)
 */
export default tokens => {
  const stack = [];

  for (let i = 0, len = tokens.length; i < len; i++) {
    let t = tokens[i];
    if (["+", "-", "*", "/"].includes(t)) {
      let curr = stack.pop();
      let prev = stack.pop();
      switch (t) {
        case "+":
          stack.push(prev + curr);
          break;
        case "-":
          stack.push(prev - curr);
          break;
        case "*":
          stack.push(prev * curr);
          break;
        case "/":
          stack.push(~~(prev / curr));
          break;
      }
    } else {
      stack.push(+t);
    }
  }
  return stack.pop();
};

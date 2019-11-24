export default arr => {
  let result = [];
  let prev1;
  let prev2;
  arr.forEach(item => {
    switch (item) {
      case "C":
        if (result.length) {
          result.pop();
        }
        break;
      case "D":
        prev1 = result.pop();
        result.push(prev1, prev1 * 2);
        break;
      case "+":
        prev1 = result.pop();
        prev2 = result.pop();
        result.push(prev2, prev1, prev2 + prev1);
        break;
      default:
        result.push(+item);
    }
  });
  return result.reduce((sum, cur) => {
    return sum + cur;
  }, 0);
};

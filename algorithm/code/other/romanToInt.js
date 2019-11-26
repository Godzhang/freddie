export default str => {
  let map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };
  let result = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    let s = str[i];
    let p = i === 0 ? 0 : str[i - 1];
    if (map[p + s]) {
      result += map[p + s];
      i--;
    } else {
      result += map[s];
    }
  }
  return result;
};

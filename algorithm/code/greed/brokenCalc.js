export default (X, Y) => {
  let ans = 0;
  while (Y > X) {
    ans++;
    if (Y % 2 === 1) {
      Y++;
    } else {
      Y /= 2;
    }
  }

  return ans + X - Y;
};

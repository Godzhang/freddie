export default arr => {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let tmp = arr[i];
    let j = i;
    for (; j > 0; j--) {
      if (tmp >= arr[j - 1]) {
        break;
      }
      arr[j] = arr[j - 1];
    }
    arr[j] = tmp;
  }
  return arr;
};

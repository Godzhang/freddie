export default arr => {
  let len = arr.length;
  let gap = ~~(len / 2);
  while (gap !== 0) {
    for (let i = gap; i < len; i++) {
      let temp = arr[i];
      let j;
      for (j = i - gap; j >= 0 && temp < arr[j]; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
    gap = ~~(gap / 2);
  }
  return arr;
};

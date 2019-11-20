export default arr => {
  // for (let i = 0, len = arr.length, min; i < len; i++) {
  //   min = arr[i];
  //   for (let j = i + 1; j < len; j++) {
  //     if (min > arr[j]) {
  //       let c = min;
  //       min = arr[j];
  //       arr[j] = c;
  //     }
  //   }
  //   arr[i] = min;
  // }
  for (let i = 0, len = arr.length, min, minIndex; i < len; i++) {
    min = arr[i];
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (min > arr[j]) {
        min = arr[j];
        minIndex = j;
      }
    }
    arr[minIndex] = arr[i];
    arr[i] = min;
  }
  return arr;
};

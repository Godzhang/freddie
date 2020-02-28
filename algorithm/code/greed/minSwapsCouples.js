export default row => {
  let changeTimes = 0;
  let i = 0;
  let len = row.length;
  while (i < len) {
    let curr = row[i];
    // let next = curr % 2 === 0 ? curr + 1 : curr - 1;
    let next = curr ^ 1;
    if (row[i + 1] !== next) {
      let nextIndex;
      for (let j = i + 2; j < len; j++) {
        if (row[j] === next) {
          nextIndex = j;
          break;
        }
      }
      if (nextIndex !== i + 1) {
        row[nextIndex] = row[i + 1];
        row[i + 1] = next;
        changeTimes++;
      }
    }
    i += 2;
  }
  return changeTimes;
};

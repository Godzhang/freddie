// export default arr => {
//   if (!arr.length) return [];
//   let len = arr.length;
//   let result = [];
//   let tmp = [arr[0]];
//   let getTmp = tmp =>
//     tmp.length === 1 ? `${tmp[0]}` : `${tmp[0]}->${tmp.pop()}`;
//   for (let i = 1; i < len; i++) {
//     if (arr[i] - arr[i - 1] > 1) {
//       let res = getTmp(tmp);
//       result.push(res);
//       tmp = [arr[i]];
//     } else {
//       tmp.push(arr[i]);
//     }
//   }
//   if (tmp.length) {
//     result.push(getTmp(tmp));
//   }
//   return result;
// };

export default arr => {
  let start = 0;
  let end = 0;
  let result = [];
  arr.push(-1);

  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[i] - 1 === arr[i - 1]) {
      end++;
    } else {
      if (start === end) {
        result.push(`${arr[start]}`);
      } else {
        result.push(`${arr[start]}->${arr[end]}`);
      }
      start = i;
      end = i;
    }
  }
  return result;
};

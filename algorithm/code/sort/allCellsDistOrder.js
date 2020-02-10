// export default (R, C, r0, c0) => {
//   let result = [];
//   for (let i = 0; i < R; i++) {
//     for (let j = 0; j < C; j++) {
//       result.push([i, j]);
//     }
//   }
//   const getDistance = (arr1, arr2) => {
//     return Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
//   };
//   result.sort((a, b) => {
//     return getDistance(a, [r0, c0]) - getDistance(b, [r0, c0]);
//   });
//   return result;
// };

export default (R, C, r0, c0) => {
  let result = [];
  let statistic = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      let distance = Math.abs(i - r0) + Math.abs(j - c0);
      if (!statistic[distance]) {
        statistic[distance] = [];
      }
      statistic[distance].push([i, j]);
    }
  }
  for (let i = 0, len = statistic.length; i < len; i++) {
    result.push(...statistic[i]);
  }
  return result;
};

// bfs思想，待研究

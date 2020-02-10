// export default intervals => {
//   intervals.sort((a, b) => a[0] - b[0]);
//   for (let i = 0; i < intervals.length - 1; i++) {
//     let curr = intervals[i];
//     let next = intervals[i + 1];

//     if (curr[0] === next[0]) {
//       if (curr[1] > next[1]) {
//         intervals.splice(i + 1, 1);
//       } else {
//         intervals.splice(i, 1);
//       }
//       i--;
//     } else if (curr[0] < next[0]) {
//       if (curr[1] === next[0]) {
//         intervals.splice(i, 2, [curr[0], next[1]]);
//         i--;
//       } else if (curr[1] > next[0]) {
//         if (curr[1] >= next[1]) {
//           intervals.splice(i + 1, 1);
//         } else {
//           intervals.splice(i, 2, [curr[0], next[1]]);
//         }
//         i--;
//       } else {
//         continue;
//       }
//     }
//   }
//   return intervals;
// };

// export default intervals => {
//   intervals.sort((a, b) => a[0] - b[0]);
//   for (let i = 0; i < intervals.length - 1; i++) {
//     let curr = intervals[i];
//     let next = intervals[i + 1];

//     if (curr[1] >= next[0]) {
//       if (curr[1] <= next[1]) {
//         intervals.splice(i, 2, [curr[0], next[1]]);
//       } else {
//         intervals.splice(i + 1, 1);
//       }
//       i--;
//     } else {
//       continue;
//     }
//   }
//   return intervals;
// };

export default intervals => {
  let result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let curr = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (curr[1] >= intervals[i][0]) {
      if (curr[1] < intervals[i][1]) {
        curr[1] = intervals[i][1];
      }
    } else {
      result.push(curr);
      curr = intervals[i];
    }
  }
  result.push(curr);
  return result;
};

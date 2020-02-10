// export default (points, K) => {
//   const getDistance = ([x, y]) => {
//     return Math.pow(x, 2) + Math.pow(y, 2);
//   };
//   points.sort((a, b) => {
//     return getDistance(a) - getDistance(b);
//   });
//   return points.slice(0, K);
// };

// export default (points, K) => {
//   let result = [];
//   let len = points.length;

//   const getDistance = ([x, y]) => {
//     return Math.pow(x, 2) + Math.pow(y, 2);
//   };
//   for (let i = 0; i < K; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < len; j++) {
//       if (getDistance(points[j]) < getDistance(points[minIndex])) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [points[i], points[minIndex]] = [points[minIndex], points[i]];
//     }
//     result.push(points[i]);
//   }
//   return result;
// };

// 只会最笨的法，待研究

// 第一版，改了好多次
// export default (A, K) => {
//   let sum = 0;
//   let negatives = [];
//   let positives = [];
//   let hasZero = false;

//   A.forEach(a => {
//     if (a > 0) {
//       positives.push(a);
//     } else if (a < 0) {
//       negatives.push(a);
//     } else {
//       hasZero = true;
//     }
//   });
//   negatives.sort((a, b) => a - b);

//   if (negatives.length) {
//     let i = 0;
//     while (K && i < negatives.length) {
//       negatives[i] = -negatives[i];
//       K--;
//       i++;
//     }
//     if (K !== 0 && K % 2 === 0) {
//       K = 0;
//     }
//   }
//   // 如果有0，剩余K全部算在0头上
//   if (hasZero && K > 0) {
//     K = 0;
//   }
//   positives = positives.concat(negatives);
//   positives.sort((a, b) => a - b);
//   // 先消除掉 K 含有的 2
//   K = K % 2;
//   while (K && positives.length) {
//     let f = positives.shift();
//     sum -= f;
//     K--;
//   }
//   if (positives.length) {
//     sum = positives.reduce((sum, cur) => {
//       return sum + cur;
//     }, sum);
//   }
//   return sum;
// };

// 比上面要耗时
// export default (A, K) => {
//   while (K > 0) {
//     let min = Math.min(...A);
//     let index = A.indexOf(min);
//     A[index] = -A[index];
//     K--;
//   }
//   return A.reduce((sum, cur) => {
//     return sum + cur;
//   }, 0);
// };

// 牛逼的解法
// export default (A, K) => {
//   let arr = new Array(201).fill(0);
//   // 将 [-100, 100] 映射到 [0, 200]
//   A.forEach(a => arr[a + 100]++);
//   let i = 0;
//   while (K > 0) {
//     while (arr[i] === 0) {
//       i++;
//     }
//     arr[i]--;
//     arr[200 - i]++;
//     if (i > 100) {
//       i = 200 - i;
//     }
//     K--;
//   }
//   let sum = 0;
//   arr.forEach((val, index) => {
//     sum += val * (index - 100);
//   });
//   return sum;
// };

export default (A, K) => {
  A.sort((a, b) => a - b);
  for (let i = 0, len = A.length; i < len; i++) {
    if (A[i] < 0) {
      A[i] = -A[i];
      K--;
    }
  }
  if (K === 0) {
    return A.reduce((sum, curr) => sum + curr, 0);
  } else {
    if (K % 2 !== 0) {
      A.sort((a, b) => a - b);
      // 如果 K 是奇数，则要减掉最小值的2倍 -min + min = - 2min
      return A.reduce((sum, curr) => sum + curr, 0) - 2 * A[0];
    } else {
      return A.reduce((sum, curr) => sum + curr, 0);
    }
  }
};

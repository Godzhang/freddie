/**
 * time: O(n^2)
 * space: O(1)
 */
// export default (arr1, arr2) => {
//   let result = [];
//   for (let i = 0, len2 = arr2.length; i < len2; i++) {
//     let cur2 = arr2[i];
//     for (let j = 0; j < arr1.length; j++) {
//       if (arr1[j] === cur2) {
//         result.push(arr1[j]);
//         arr1.splice(j, 1);
//         j--;
//       }
//     }
//   }
//   arr1.sort((a, b) => a - b);
//   result.push(...arr1);
//   return result;
// };

// [2,3,1,3,2,4,6,7,9,2,19]
// [2,1,4,3,9,6]
/**
 * time: O(n+k)
 * space: O(k)
 */
// export default (arr1, arr2) => {
//   let result = [];
//   let max = arr1[0];
//   let min = arr1[0];
//   for (let i = 0, len = arr1.length; i < len; i++) {
//     if (arr1[i] > max) {
//       max = arr1[i];
//     } else if (arr1[i] < min) {
//       min = arr1[i];
//     }
//   }
//   let buckets = new Array(max - min + 1).fill(0);
//   for (let i = 0, len = arr1.length; i < len; i++) {
//     let idx = arr1[i] - min;
//     buckets[idx]++;
//   }

//   for (let j = 0, len = arr2.length; j < len; j++) {
//     let count = buckets[arr2[j] - min];
//     while (count) {
//       result.push(arr2[j]);
//       count--;
//     }
//     buckets[arr2[j] - min] = 0;
//   }

//   for (let i = 0, len = buckets.length; i < len; i++) {
//     let count = buckets[i];
//     while (count) {
//       result.push(i + min);
//       count--;
//     }
//   }
//   return result;
// };

export default (arr1, arr2) => {
  return arr1.sort((a, b) => {
    let ai = arr2.indexOf(a);
    let bi = arr2.indexOf(b);
    if (ai === -1 && bi === -1) {
      return a - b;
    } else if (ai === -1) {
      return 1;
    } else if (bi === -1) {
      return -1;
    } else {
      return ai - bi;
    }
  });
};

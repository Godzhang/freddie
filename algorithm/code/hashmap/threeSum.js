// 暴力法 leetcode执行超时，暂无法验证
// export default nums => {
//   let result = [];
//   let map = {};
//   let len = nums.length;

//   const getKey = (i, j, k) => {
//     let arr = [i, j, k];
//     arr.sort((a, b) => a - b);
//     return arr.join("-");
//   };

//   for (let i = 0; i < len - 2; i++) {
//     for (let j = i + 1; j < len - 1; j++) {
//       for (let k = j + 1; k < len; k++) {
//         let ni = nums[i];
//         let nj = nums[j];
//         let nk = nums[k];
//         if (ni + nj + nk === 0 && !map[getKey(ni, nj, nk)]) {
//           result.push([ni, nj, nk]);
//           map[getKey(ni, nj, nk)] = true;
//         }
//       }
//     }
//   }

//   return result;
// };

// 暴力法优化，对于大的数组同样超时
// export default nums => {
//   let result = [];
//   let map = {};
//   let len = nums.length;

//   const getKey = (i, j, k) => {
//     let arr = [i, j, k];
//     arr.sort((a, b) => a - b);
//     return arr.join("-");
//   };

//   for (let i = 0; i < len - 2; i++) {
//     for (let j = i + 1; j < len - 1; j++) {
//       let ni = nums[i];
//       let nj = nums[j];
//       let nk = 0 - ni - nj;
//       let k = nums.indexOf(nk, j + 1);

//       if (k > -1 && !map[getKey(ni, nj, nk)]) {
//         result.push([ni, nj, nk]);
//         map[getKey(ni, nj, nk)] = true;
//       }
//     }
//   }

//   return result;
// };

// 超时
// export default nums => {
//   let result = [];
//   let map = {};
//   nums.sort((a, b) => a - b);

//   const getKey = (i, j, k) => {
//     let arr = [i, j, k];
//     arr.sort((a, b) => a - b);
//     return arr.join("-");
//   };

//   for (let i = 0, len = nums.length - 2; i < len; i++) {
//     let cur = nums[i];
//     let rest = nums.slice(i + 1);
//     let start = 0;
//     let end = rest.length - 1;
//     while (start < end) {
//       let s = rest[start];
//       let e = rest[end];
//       if (cur + s + e > 0) {
//         end--;
//       } else if (cur + s + e < 0) {
//         start++;
//       } else {
//         if (!map[getKey(cur, rest[start], rest[end])]) {
//           result.push([cur, rest[start], rest[end]]);
//           map[getKey(cur, rest[start], rest[end])] = true;
//         }
//         start++;
//       }
//     }
//   }

//   return result;
// };

export default nums => {
  let result = [];
  let len = nums.length;
  nums.sort((a, b) => a - b);

  // 保证数组是不是同符号的，除非全为0
  if (nums[0] <= 0 && nums[len - 1] >= 0) {
    for (let i = 0; i < len - 2; ) {
      // 如果3个数中最左边的数为正数，则无解
      if (nums[i] > 0) break;
      let first = i + 1;
      let last = len - 1;
      do {
        // 如果相遇，或者第一个和三个数同符号，则退出
        if (first >= last || nums[i] * nums[last] > 0) break;
        let sum = nums[i] + nums[first] + nums[last];
        if (sum === 0) {
          result.push([nums[i], nums[first], nums[last]]);
        }
        if (sum <= 0) {
          while (first < last && nums[first] === nums[++first]) {}
        } else {
          while (first < last && nums[last] === nums[--last]) {}
        }
      } while (first < last);
      while (nums[i] === nums[++i]) {}
    }
  }
  return result;
};

/**
 * 时间复杂度：取决于增量的取值
 *    经验值：O(n^1.25) ~ O(1.6n^1.25)
 * 空间复杂度：O(1)
 * 是否稳定：不稳定
 */

// export default arr => {
//   let len = arr.length;
//   let gap = ~~(len / 2);
//   while (gap !== 0) {
//     for (let i = gap; i < len; i++) {
//       let temp = arr[i];
//       let j;
//       for (j = i - gap; j >= 0 && temp < arr[j]; j -= gap) {
//         arr[j + gap] = arr[j];
//       }
//       arr[j + gap] = temp;
//     }
//     gap = ~~(gap / 2);
//   }
//   return arr;
// };

// export default arr => {
//   let len = arr.length;
//   let gap = ~~(len / 2);

//   while (gap >= 1) {
//     for (let i = gap; i < len; i++) {
//       let cur = i;
//       let prev = i - gap;
//       while (prev >= 0 && arr[cur] < arr[prev]) {
//         [arr[cur], arr[prev]] = [arr[prev], arr[cur]];
//         cur = prev;
//         prev -= gap;
//       }
//     }
//     gap = ~~(gap / 2);
//   }

//   return arr;
// };

// 使用 Hibbard 增量序列算法 2^k - 1
const getGaps = len => {
  let result = [0];
  let start = 1;
  let curr = Math.pow(2, start) - 1;
  while (curr <= len) {
    result.push(curr);
    curr = Math.pow(2, ++start) - 1;
  }
  return result;
};

const shellSort = arr => {
  let len = arr.length;
  let gaps = getGaps(len / 2);
  let gap = gaps.pop();

  while (gap !== 0) {
    for (let i = gap; i < len; i++) {
      let cur = arr[i];
      let j = i - gap;
      for (; j >= 0 && cur < arr[j]; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = cur;
    }
    gap = gaps.pop();
  }

  return arr;
};

export default shellSort;

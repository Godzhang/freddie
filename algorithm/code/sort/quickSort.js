/**
 * 时间复杂度：
 *    最优：O(nlogn)
 *    平均：O(nlogn)
 *    最坏：O(n^2)
 * 空间复杂度：原地排序和使用辅助数组的情况不同，需分别判断，以下为原地排序
 *    最优：原地排序 O(1)，每次都平分，然后递归调用 O(logn)，最终是 O(logn)
 *    最坏：每次的基准值正好是最大值或最小值 O(n)
 * 是否稳定：不稳定
 */

// 基础算法 (分而治之)
// export default arr => {
//   let quickSort = arr => {
//     let len = arr.length;
//     if (len < 2) {
//       return arr;
//     } else {
//       // 标尺
//       let flag = arr[0];
//       let left = [];
//       let right = [];
//       for (let i = 1, tmp; i < len; i++) {
//         tmp = arr[i];
//         if (tmp < flag) {
//           left.push(tmp);
//         } else {
//           right.push(tmp);
//         }
//       }
//       return quickSort(left).concat(flag, quickSort(right));
//     }
//   };
//   return quickSort(arr);
// };

// const partition = (arr, left, right) => {
//   const pivot = arr[~~((left + right) / 2)];
//   let i = left;
//   let j = right;

//   while (i <= j) {
//     while (arr[i] < pivot) {
//       i++;
//     }
//     while (arr[j] > pivot) {
//       j--;
//     }
//     if (i <= j) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       i++;
//       j--;
//     }
//   }
//   return i;
// };
// const quick = (arr, left, right) => {
//   if (arr.length > 1) {
//     let index = partition(arr, left, right);
//     if (left < index - 1) {
//       quick(arr, left, index - 1);
//     }
//     if (index < right) {
//       quick(arr, index, right);
//     }
//   }
//   return arr;
// };
// const quickSort = arr => {
//   return quick(arr, 0, arr.length - 1);
// };

// export default quickSort;

// 高级算法 in-place
export default arr => {
  let swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  };
  // 完成一次划分交换
  let findCenter = (arr, left, right) => {
    let flag = arr[left];
    let idx = left + 1;
    for (let i = idx; i <= right; i++) {
      if (arr[i] < flag) {
        swap(arr, idx, i);
        idx++;
      }
    }
    swap(arr, left, idx - 1);
    return idx;
  };
  let sort = (arr, left, right) => {
    if (left < right) {
      let center = findCenter(arr, left, right);
      sort(arr, left, center - 1);
      sort(arr, center, right);
    }
  };
  sort(arr, 0, arr.length - 1);
  return arr;
};

// 不使用递归，使用栈的方式，待研究...

/**
 * 时间复杂度：
 *    最优：O(nlogn)
 *    平均：O(nlogn)
 *    最坏：O(nlogn)
 * 空间复杂度：O(n)
 * 是否稳定：稳定
 */

// export default arr => {
//   let merge = (left, right) => {
//     let result = [];

//     while (left.length && right.length) {
//       if (left[0] <= right[0]) {
//         result.push(left.shift());
//       } else {
//         result.push(right.shift());
//       }
//     }
//     if (left.length) result.push(...left);
//     if (right.length) result.push(...right);

//     return result;
//   };

//   let mergeSort = arr => {
//     let len = arr.length;
//     if (len < 2) return arr;

//     let middle = Math.floor(len / 2);
//     let left = arr.slice(0, middle);
//     let right = arr.slice(middle);

//     return merge(mergeSort(left), mergeSort(right));
//   };
//   return mergeSort(arr);
// };

// 改进版
// 比较前先判断左边最大值和右边最小值的关系
// 如果最大值小于等于最小值，则不用排序
export default arr => {
  let merge = (left, right) => {
    let result = [];

    // 优化片段
    if (left[left.length - 1] <= right[0]) {
      result.push(...left, ...right);
      return result;
    }

    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    if (left.length) result.push(...left);
    if (right.length) result.push(...right);

    return result;
  };

  let mergeSort = arr => {
    let len = arr.length;
    if (len < 2) return arr;

    let middle = Math.floor(len / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  };
  return mergeSort(arr);
};

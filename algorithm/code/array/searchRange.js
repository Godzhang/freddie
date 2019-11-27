// export default (arr, target) => {
//   return [arr.indexOf(target), arr.lastIndexOf(target)];
// };

// export default (arr, target) => {
//   let len = arr.length;
//   let start = 0;
//   let end = len - 1;
//   let result = [-1, -1];
//   while (start <= end) {
//     if (arr[start] === target) {
//       result[0] = start;
//     } else {
//       start++;
//     }
//     if (arr[end] === target) {
//       result[1] = end;
//     } else {
//       end--;
//     }
//     if (result[0] !== -1 && result[1] !== -1) {
//       break;
//     }
//   }
//   return result;
// };

export default (arr, target) => {
  let findLeft = (arr, target) => {
    if (!arr.length) return -1;
    let left = 0;
    let right = arr.length;
    let mid;

    while (left < right) {
      mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        right = mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else if (arr[mid] > target) {
        right = mid;
      }
    }
    if (left === arr.length) return -1;
    return arr[left] === target ? left : -1;
  };
  let findRight = (arr, target) => {
    if (!arr.length) return -1;
    let left = 0;
    let right = arr.length;
    let mid;

    while (left < right) {
      mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        left = mid + 1;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else if (arr[mid] > target) {
        right = mid;
      }
    }
    if (left === 0) return -1;
    return arr[left - 1] === target ? left - 1 : -1;
  };
  return [findLeft(arr, target), findRight(arr, target)];
};

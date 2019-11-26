// export default (arr, target) => {
//   return [arr.indexOf(target), arr.lastIndexOf(target)];
// };

export default (arr, target) => {
  let len = arr.length;
  let start = 0;
  let end = len - 1;
  let result = [-1, -1];
  while (start <= end) {
    if (arr[start] === target) {
      result[0] = start;
    } else {
      start++;
    }
    if (arr[end] === target) {
      result[1] = end;
    } else {
      end--;
    }
    if (result[0] !== -1 && result[1] !== -1) {
      break;
    }
  }
  return result;
};

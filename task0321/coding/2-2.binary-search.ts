// 二分查找

const init = (
  len: number = 20,
): number[] => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i * 2);
  }
  return arr;
};
export const binarySearch = (
  arr: number[],
  target: number,
): number => {
  let low = 0;
  let high = arr.length - 1;
  let mid: number;
  
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1; // not found
};

const arr = init();
console.log(binarySearch(arr, 12));
console.log(binarySearch(arr, 13));
console.log(binarySearch(arr, 22));
console.log(binarySearch(arr, 100));

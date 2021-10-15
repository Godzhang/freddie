// 快速排序

const init = (
  len: number = 20,
): number[] => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    const n = Math.round(Math.random() * 100);
    arr.push(n);
  }
  return arr;
};
const swap = (
  arr: number[],
  i: number,
  j: number,
): void => {
  if (i === j) return;
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
export const quickSort = (
  arr: number[],
  low: number,
  high: number,
): void => {
  if (low >= high) return;
  const pivotKey = Math.floor((low + high) / 2);
  const pivotValue = arr[pivotKey];
  swap(arr, low, pivotKey);
  let i = low;
  for (let j = low + 1; j <= high; j++) {
    if (arr[j] >= pivotValue) continue;
    i++;
    swap(arr, i, j);
  }
  swap(arr, low, i);
  quickSort(arr, low, i - 1);
  quickSort(arr, i + 1, high);
};

const arr = init();
console.log(arr);
quickSort(arr, 0, arr.length - 1);
console.log(arr);

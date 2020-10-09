interface ArrayItem {
  [key: string]: any;
}

export const keyBy = (arr: ArrayItem[], key: string) => {
  const result: ArrayItem = {};
  for (let i = 0, len = arr.length; i < len; i++) {
    result[arr[i][key]] = arr[i];
  }
  return result;
};

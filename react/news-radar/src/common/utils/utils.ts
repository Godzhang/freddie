interface ArrayItem {
  [key: string]: any;
}
// export const keyBy = <T, K extends keyof T>(arr: T[], key: K) => {
//   const result: ArrayItem = {};
//   for (let i = 0, len = arr.length; i < len; i++) {
//     result[arr[i][key]] = arr[i];
//   }
//   return result;
// };
export const keyBy = (arr: ArrayItem[], key: keyof ArrayItem) => {
  const result: ArrayItem = {};
  for (let i = 0, len = arr.length; i < len; i++) {
    result[arr[i][key]] = arr[i];
  }
  return result;
};

export const dateFormatter = (ms: Date | number, fmt: string): string => {
  const date = new Date(ms);
  const o: {
    [key: string]: number;
  } = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "S+": date.getMilliseconds(), // 毫秒
  };
  if (/(y+)/i.test(fmt)) {
    fmt = fmt
      .replace(RegExp.$1, date.getFullYear() + "")
      .substr(4 - RegExp.$1.length);
  }
  for (let k in o) {
    const reg = new RegExp(`(${k})`);
    if (reg.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? `${o[k]}`
          : `00${o[k]}`.substr((o[k] + "").length)
      );
    }
  }
  return fmt;
};

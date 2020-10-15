import { DataNode } from "antd/lib/tree";

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

interface TreeData {
  title: string;
  key?: string | number;
  children?: TreeData[];
  subnav?: TreeData[];
}
export const addTreeKey = (arr: TreeData[], parentKey?: string): DataNode[] => {
  arr = JSON.parse(JSON.stringify(arr));
  arr.forEach((item, index) => {
    const key = parentKey ? `${parentKey}-${index}` : `${index}`;
    item.key = key;
    if (item.children && item.children.length > 0) {
      item.children = addTreeKey(item.children, key) as TreeData[];
    }
  });

  return arr as DataNode[];
};

const getDataType = (data: any): string => {
  return Object.prototype.toString.call(data);
};

//@ts-ignore
export const cloneSimpleData = (data, isDeep = false) => {
  let newData = "";
  if (!isDeep) {
    if (getDataType(data) === "[object Object]") {
      newData = Object.assign({}, data);
    } else if (getDataType(data) === "[object Array]") {
      newData = data.concat();
    }
  } else {
    newData = JSON.parse(JSON.stringify(data));
  }
  return newData;
};

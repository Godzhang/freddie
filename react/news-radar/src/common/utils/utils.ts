import { DataNode } from "antd/lib/tree";

// interface ArrayItem {
//   [key: string]: any;
// }
// export const keyBy = (arr: ArrayItem[], key: keyof ArrayItem) => {
//   const result: ArrayItem = {};
//   for (let i = 0, len = arr.length; i < len; i++) {
//     result[arr[i][key]] = arr[i];
//   }
//   return result;
// };

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

export const formatterContent = (content: string): string[] => {
  if (content) {
    const paragraphs = content.split(/\n/);
    return paragraphs;
  } else {
    return [];
  }
};

const timeInterval = {
  second: 1000,
  minute: 60 * 1000,
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
};
export const getTimeDesc = (time: string): string => {
  const now = Date.now();
  const aTime = new Date(time).getTime();
  const diffTime = now - aTime;
  const { day, hour, minute, second } = timeInterval;

  // 天数
  const days = Math.floor(diffTime / day);
  if (days > 0) return `${days} days ago`;
  // 小时数
  const residue_1 = diffTime % hour;
  const hours = Math.floor(residue_1 / hour);
  if (hours > 0) return `${hours} hours ago`;
  // 分钟数
  const residue_2 = residue_1 % minute;
  const minutes = Math.floor(residue_2 / minute);
  if (minutes > 0) return `${minutes} minutes ago`;
  // 秒数
  const residue_3 = residue_2 % minute;
  const seconds = Math.round(residue_3 / second);
  if (seconds > 0) return `${seconds} seconds ago`;

  return time;
};

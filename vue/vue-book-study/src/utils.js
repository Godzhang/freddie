const bialRE = /[^\w.$]/;

export function parsePath(path) {
  // 如果不包含 数字 字母 下划线 . $，直接返回
  if (bialRE.test(path)) {
    return;
  }
  const segments = path.split("."); // a.b.c
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return;
      obj = obj[segments[i]];
    }
    return obj;
  };
}

export function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

export function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

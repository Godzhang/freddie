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

const seenObject = new Set();

export function traverse(val) {
  _traverse(val, seenObject);
  seenObject.clear();
}

function _traverse(val, seen) {
  let i, keys;
  const isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val)) {
    return;
  }
  if (val.__ob__) {
    const depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return;
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) _traverse(val[i], seen);
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) _traverse(val[keys[i]], seen);
  }
}

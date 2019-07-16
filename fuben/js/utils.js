function memorize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    return cache[key] || (cache[key] = fn.apply(fn, args));
  };
}

// 反柯里化
function unCurrying(fn) {
  return (tar, ...args) => {
    return fn.apply(tar, args);
  };
}

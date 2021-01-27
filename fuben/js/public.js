// 数组乱序
function shuffle(arr) {
  let m = arr.length;
  while (m > 1) {
    let index = Math.floor(Math.random() * m--);
    [arr[m], arr[index]] = [arr[index], arr[m]];
  }
  return arr;
}

// 缓存
const memoize = (fn) => {
  return new Proxy(fn, {
    cache: new Map(),
    apply(target, thisArg, argsList) {
      let cacheKey = argsList.toString();
      if (!this.cache.has(cacheKey)) {
        this.cache.set(cacheKey, target.apply(thisArg, argsList));
      }
      return this.cache.get(cacheKey);
    },
  });
};

const memoize_2 = function (fn) {
  const cache = {};
  return function (...args) {
    const cacheKey = args.toString();
    if (!cache[cacheKey]) {
      cache[cacheKey] = fn.apply(this, args);
    }
    return cache[cacheKey];
  };
};

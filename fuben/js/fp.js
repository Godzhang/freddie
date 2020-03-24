const compose = (...args) => {
  return result => {
    return args.reduceRight((result, fn) => {
      return fn.call(null, result);
    }, result);
  };
};
const pipe = (...args) => {
  return result => {
    return args.reduce((result, fn) => {
      return fn(result);
    }, result);
  };
};

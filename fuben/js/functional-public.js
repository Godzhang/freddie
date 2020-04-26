const curry = function (fn, ...args) {
  return function (..._args) {
    _args = args.concat(_args);

    if (_args.length < fn.length) {
      return curry(fn, ..._args);
    } else {
      return fn.apply(null, _args);
    }
  };
};

const partial = () => {};

const compose = function (...callbacks) {
  return function (args) {
    return callbacks.reduceRight((result, curr) => {
      return curr.call(this, result);
    }, args);
  };
};

const pipe = function (...callbacks) {
  return function (args) {
    return callbacks.reduce((result, curr) => {
      return curr.call(this, result);
    }, args);
  };
};

const identity = (v) => v;

const tap = curry(function (fn, params) {
  fn.call(null, params);
  return params;
});

const alt = curry(function (fn1, fn2, val) {
  return fn1(val) || fn2(val);
});

const seq = function (...funcs) {
  return function (val) {
    funcs.forEach((fn) => fn(val));
  };
};

const fork = function (join, func1, func2) {
  return function (val) {
    return join(func1(val), func2(val));
  };
};

const isValid = (val) => !_.isUndefined(val) && !_.isNull(val);

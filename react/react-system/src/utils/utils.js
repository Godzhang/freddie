export const debounce = (fn, interval) => {
  var timer = null;
  function delay() {
    var target = this;
    var args = arguments;
    return setTimeout(function () {
      fn.apply(target, args);
    }, interval);
  }
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = delay.apply(this, arguments);
  };
};

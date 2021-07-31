export const rafSchd = (fn) => {
  let lastArgs = null;
  let frameId = null;

  const wrapperFn = (...args) => {
    lastArgs = args;

    if (frameId) return;

    frameId = requestAnimationFrame(() => {
      frameId = null;
      fn(...lastArgs);
    });
  };

  wrapperFn.cancel = function () {
    if (!frameId) return;
    cancelAnimationFrame(frameId);
    frameId = null;
  };

  return wrapperFn;
};

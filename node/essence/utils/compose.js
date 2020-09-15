module.exports = compose;
// koa中间件方案
function compose(middleware) {
  // 如果不是数组，抛出错误
  if (!Array.isArray(middleware))
    throw new TypeError("Middleware stack must be an array");
  // 如果有一项不是函数，抛出错误
  for (const fn of middleware) {
    if (typeof fn !== "function")
      throw new TypeError("Middleware must be composed of function"); // composed of 由...组成
  }
  // next 是 undefined，所有中间件执行完毕后，用来结束函数
  return function (ctx, next) {
    let index = -1;
    return dispatch(0);

    function dispatch(i) {
      // 防止多次触发next，确保一个中间件只能调用一次next
      if (i <= index)
        return Promise.reject(new Error("next() called multiple times"));
      index = i;
      let fn = middleware[i];
      // 执行到最后，让fn = undefined，结束函数
      // 这里的next执行到最后应该存在有值的情况，现在还不知道哪种场景用得到
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();
      // 调用后返回一个成功状态的promise对象
      // 第二个参数是执行下一个中间件的方法，因此中间件必须执行next()，否则无法执行后面的中间件
      try {
        return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}

// test
function one(ctx, next) {
  console.log("one");
  next().then(() => {
    console.log("one next");
  });
}
function two(ctx, next) {
  console.log("two");
  next().then(() => {
    console.log("two next");
  });
}
function three(ctx, next) {
  console.log("three");
  next().then(() => {
    console.log("three next");
  });
}
const middlewares = compose([one, two, three]);
middlewares().then(() => {
  console.log("执行完毕");
});

function myNew (fn, ...args) {
  let newObj = {}
  newObj.__proto__ = fn.prototype
  fn.call(newObj, ...args)
  return newObj
}

Function.prototype.myCall = function (ctx, ...args) {
    ctx = ctx ? Object(ctx) : window
    let fn = Symbol('fn')
    ctx[fn] = this
    let result = ctx[fn](...args)
    Reflect.deleteProperty(ctx, fn)
    return result
}

Function.prototype.myApply = function (ctx, args) {
  ctx = ctx ? Object(ctx) : window
  let fn = Symbol('fn')
  ctx[fn] = this
  let result = ctx[fn](...args)
  Reflect.deleteProperty(ctx, fn)
  return result
}

Function.prototype.myBind = function (ctx, ...args1) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  let self = this

  function Fn () {}
  let boundFunc = function (...args2) {
    return self.call(this instanceof boundFunc ? this : ctx, ...args1, ...args2)
  }
  Fn.prototype = this.prototype
  boundFunc.prototype = new Fn()
  return boundFunc
}

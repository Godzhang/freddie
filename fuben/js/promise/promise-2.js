// https://juejin.im/post/5b2f02cd5188252b937548ab
class zPromise {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new Error("MyPromise must accept a function as a parameter");
    }

    this.status = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = value => {
      if (this.status !== "pending") return;
      this.status = "fulfilled";
      this.value = value;
      this.onResolvedCallbacks.forEach(cb => cb());
    };
    const reject = err => {
      if (this.status !== "pending") return;
      this.status = "rejected";
      this.reason = err;
      // 如果最后一步报错，检查失败回调事件数组长度，为0则手动打印错误
      if (this.onRejectedCallbacks.length === 0) {
        console.error(err);
      }
      this.onRejectedCallbacks.forEach(cb => cb());
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : value => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : err => {
            throw err;
          };
    let promise2 = new zPromise((resolve, reject) => {
      if (this.status === "fulfilled") {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.status === "rejected") {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.status === "pending") {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
    });
    return promise2;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(callback) {
    return this.then(
      value => zPromise.resolve(callback()).then(() => value),
      err =>
        zPromise.resolve(callback()).then(() => {
          throw err;
        })
    );
  }
  // 最后调用，如果最后一步有错误可以捕捉到
  // done() {
  //   return this.catch(err => console.error(err));
  // }

  isPending() {
    return this.status === "pending";
  }
  isFulfilled() {
    return this.status === "fulfilled";
  }
  isRejected() {
    return this.status === "rejected";
  }

  static resolve(val) {
    return new zPromise(resolve => resolve(val));
  }

  static reject(err) {
    return new zPromise((resolve, reject) => reject(err));
  }

  static all(promises) {
    let arr = [];
    let i = 0;
    let len = promises.length;
    return new zPromise((resolve, reject) => {
      for (let i = 0; i < len; i++) {
        promises[i].then(res => {
          arr[i] = res;
          i++;
          if (i === len) {
            resolve(arr);
          }
        }, reject);
      }
    });
  }
  static race(promises) {
    return new zPromise((resolve, reject) => {
      for (let i = 0, l = promises.length; i < l; i++) {
        promises[i].then(resolve, reject);
      }
    });
  }
  // 为了终止后续的执行
  static cancel() {
    return new zPromise(() => {});
  }
  static stop() {
    return this.cancel();
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  // 循环引用报错
  if (x === promise2) {
    return reject(new TypeError("Chaining cycle detected for promise"));
  }
  // 防止多次调用
  let called;
  // x不是null 且x是对象或者函数
  if (x != null && (typeof x === "object" || typeof x === "function")) {
    try {
      let then = x.then;
      // 如果then是函数，就默认是promise了
      if (typeof then === "function") {
        // 让then执行，第一个参数是this
        then.call(
          x,
          y => {
            // 成功和失败只能调用一个
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          err => {
            if (called) return;
            called = true;
            reject(err);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}

// let p = new zPromise(resolve => resolve(42))
//   .then(value => res * 2)
//   .catch(err => err)
//   .then(res => {
//     return res * 4;
//   });
// let p1 = new zPromise((resolve, reject) => {
//   setTimeout(() => {
//     reject("p1");
//   }, 1000);
// });
// let p2 = p1.then(res => res, "yichang");
// p2.then(res => console.log(res), err => console.log(err));

// function fn1() {
//   return new zPromise(resolve => {
//     setTimeout(() => {
//       console.log(1111);
//       resolve(1);
//     }, 1000);
//   });
// }
// function fn2() {
//   return new zPromise(resolve => {
//     setTimeout(() => {
//       console.log(2222);
//       resolve(2);
//     }, 2000);
//   });
// }
// function final() {
//   return new zPromise(resolve => {
//     console.log("final");
//   });
// }
// fn1()
//   .then(res => console.log(res), err => console.log(err))
//   .then(res => console.log(res), err => console.log(err))
//   .then(res => console.log(res), err => console.log(err))
//   .then(res => console.log(res), err => console.log(err))
//   .finally(() => {
//     console.log("finally");
//   });

//   // promises-aplus-tests promise-2.js
//   zPromise.defer = zPromise.deferred = function() {
//     let dfd = {};
//     dfd.promise = new zPromise((resolve, reject) => {
//       dfd.resolve = resolve;
//       dfd.reject = reject;
//     });
//     return dfd;
//   };

// module.exports = zPromise;

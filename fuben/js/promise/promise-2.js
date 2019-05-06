// https://juejin.im/post/5b2f02cd5188252b937548ab
class zPromise {
  constructor(executor) {
    this.status = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = value => {
      if (this.status !== "pending") return;
      // setTimeout(() => {
      this.status = "fulfilled";
      this.value = value;
      this.onResolvedCallbacks.forEach(cb => cb());
      // }, 0);
    };
    const reject = err => {
      if (this.status !== "pending") return;
      // setTimeout(() => {
      this.status = "rejected";
      this.reason = err;
      this.onRejectedCallbacks.forEach(cb => cb());
      // }, 0);
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    let promise2 = new zPromise((resolve, reject) => {
      if (this.status === "fulfilled") {
        let x = onFulfilled(this.value);
        resolvePromise(promise2, x, resolve, reject);
      }
      if (this.status === "rejected") {
        let x = onRejected(this.reason);
        resolvePromise(promise2, x, resolve, reject);
      }
      if (this.status === "pending") {
        this.onResolvedCallbacks.push(() => {
          let x = onFulfilled(this.value);
          resolvePromise(promise2, x, resolve, reject);
        });
        this.onRejectedCallbacks.push(() => {
          let x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        });
      }
    });
    return promise2;
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

function fn() {
  return new zPromise(resolve => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

fn().then(res => console.log(res));
// fn().then(res => console.log(1 + res));

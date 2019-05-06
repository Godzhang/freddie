const isFunction = fn => typeof fn === "function";
const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

class MyPromise {
  constructor(handle) {
    if (!isFunction(handle)) {
      throw new Error("MyPromise must accept a function as a parameter");
    }
    this._status = PENDING;
    this._value = undefined;
    this._fulfilledQueues = [];
    this._rejectedQueues = [];

    try {
      handle(this._resolve.bind(this), this._reject.bind(this));
    } catch (err) {
      this._reject(err);
    }
  }
  _resolve(val) {
    const run = () => {
      if (this._status !== PENDING) return;
      const runFulfilled = value => {
        let callback;
        while ((callback = this._fulfilledQueues.shift())) {
          callback(val);
        }
      };
      const runRejected = error => {
        let callback;
        while ((callback = this._rejectedQueues.shift())) {
          callback(val);
        }
      };
      if (val instanceof MyPromise) {
        val.then(
          value => {
            this._value = value;
            this._status = FULFILLED;
            runFulfilled(value);
          },
          err => {
            this._value = err;
            this._status = REJECTED;
            runRejected(err);
          }
        );
      } else {
        this._status = FULFILLED;
        this._value = val;
        runFulfilled(val);
      }
    };
    // 这里采用异步执行，应该在then方法被调用的那一轮事件循环之后的新执行栈中执行
    setTimeout(run, 0);
  }
  _reject(err) {
    if (this._status !== PENDING) return;
    const run = () => {
      this._status = REJECTED;
      this._value = err;
      let callback;
      while ((callback = this._rejectedQueues.shift())) {
        callback(err);
      }
    };
    setTimeout(run, 0);
  }
  then(onFulfilled, onRejected) {
    let { _value, _status } = this;
    return new MyPromise((onFulfilledNext, onRejectedNext) => {
      // 封装一个成功时执行的函数
      let fulfilled = value => {
        try {
          if (!isFunction(onFulfilled)) {
            onFulfilledNext(value);
          } else {
            let res = onFulfilled(value);
            if (res instanceof MyPromise) {
              // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
              res.then(onFulfilledNext, onRejectedNext);
            } else {
              //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
              onFulfilledNext(res);
            }
          }
        } catch (err) {
          // 如果函数执行出错，新的Promise对象的状态为失败
          onRejectedNext(err);
        }
      };
      // 封装一个失败时执行的函数
      let rejected = error => {
        try {
          if (!isFunction(onRejected)) {
            onRejectedNext(error);
          } else {
            let res = onRejected(error);
            if (res instanceof MyPromise) {
              res.then(onFulfilledNext, onRejectedNext);
            } else {
              onFulfilledNext(res);
            }
          }
        } catch (err) {
          onRejectedNext(err);
        }
      };
      if (_status === PENDING) {
        this._fulfilledQueues.push(onFulfilled);
        this._rejectedQueues.push(onRejected);
      } else if (_status === FULFILLED) {
        fulfilled(_value);
      } else {
        rejected(_value);
      }
    });
  }
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
  finally(callback) {
    return this.then(
      value => MyPromise.resolve(callback()).then(() => value),
      err =>
        MyPromise.resolve(callback()).then(() => {
          throw err;
        })
    );
  }
  static resolve(value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise(resolve => resolve(value));
  }
  static reject(value) {
    return new MyPromise((resolve, reject) => reject(value));
  }
  static all(list) {
    return new MyPromise((resolve, reject) => {
      let values = [];
      let count = 0;
      for (let [i, p] of list.entries()) {
        this.resolve(p).then(
          res => {
            values[i] = res;
            count++;
            if (count === list.length) resolve(values);
          },
          err => {
            reject(err);
          }
        );
      }
    });
  }
  static race(list) {
    return new MyPromise((resolve, reject) => {
      for (let p of list) {
        this.resolve(p).then(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
      }
    });
  }
}

// function fn() {
//   return new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(30);
//     }, 1000);
//   });
// }

// fn()
//   .then(res => {
//     return new MyPromise(resolve => {
//       resolve(res * 2);
//     });
//   })
//   .then(res => console.log(res));

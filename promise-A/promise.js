function resolvePromise(promise2, x, resolve, reject) {
  let then;
  let thenCalledOrThrow = false;

  if (promise2 === x) {
    // 标准2.3.1
    return reject(new TypeError("Chaining cycle detected for promise!"));
  }

  if (x instanceof pPromise) {
    // 标准2.3.2
    if (x.status === "pending") {
      x.then(
        (value) => resolvePromise(promise2, value, resolve, reject),
        reject
      );
    } else {
      x.then(resolve, reject);
    }
    return;
  }

  if (x != null && (typeof x === "object" || typeof x === "function")) {
    // 标准2.3.3
    try {
      // 2.3.3.1 因为x.then有可能是一个getter，这种情况下多次读取就有可能产生副作用
      // 即要判断它的类型，又要调用它，这就是两次读取
      then = x.then;
      if (typeof then === "function") {
        // 2.3.3.3
        then.call(
          x,
          (y) => {
            // 2.3.3.3.1
            if (thenCalledOrThrow) return; // 2.3.3.3.3 即这三处谁选执行就以谁的结果为准
            thenCalledOrThrow = true;
            return resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            // 2.3.3.3.2
            if (thenCalledOrThrow) return; // 2.3.3.3.3 即这三处谁选执行就以谁的结果为准
            thenCalledOrThrow = true;
            return reject(r);
          }
        );
      } else {
        // 2.3.3.4
        resolve(x);
      }
    } catch (e) {
      if (thenCalledOrThrow) return; // 2.3.3.3.3 即这三处谁选执行就以谁的结果为准
      thenCalledOrThrow = true;
      return reject(e);
    }
  } else {
    // 2.3.4
    resolve(x);
  }
}

class pPromise {
  constructor(executor) {
    this.status = "pending";
    this.data = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (value instanceof pPromise) {
        return value.then(resolve, reject)
      }
      setTimeout(() => {
        if (this.status !== "pending") return;
        this.status = "resolved";
        this.data = value;
        this.onResolvedCallbacks.forEach((cb) => cb(value));
      })
    };

    const reject = (reason) => {
      setTimeout(() => {
        if (this.status !== "pending") return;
        this.status = "rejected";
        this.data = reason;
        this.onRejectedCallbacks.forEach((cb) => cb(reason));
      })
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onResolved, onRejected) {
    let promise2;

    onResolved = typeof onResolved === "function" ? onResolved : (v) => v;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (r) => {
            throw r;
          };

    if (this.status === "resolved") {
      return (promise2 = new pPromise((resolve, reject) => {
        try {
          let x = onResolved(this.data);
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e);
        }
      }));
    }

    if (this.status === "rejected") {
      return (promise2 = new pPromise((resolve, reject) => {
        try {
          let x = onRejected(this.data);
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e);
        }
      }));
    }

    if (this.status === "pending") {
      return (promise2 = new pPromise((resolve, reject) => {
        this.onResolvedCallbacks.push((value) => {
          try {
            let x = onResolved(this.data);
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e);
          }
        });
        this.onRejectedCallbacks.push((reason) => {
          try {
            let x = onRejected(this.data);
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e);
          }
        });
      }));
    }
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  static deferred () {
    let dfd = {}
    dfd.promise = new pPromise((resolve, reject) => {
      dfd.resolve = resolve
      dfd.reject = reject
    })
    return dfd
  }
}

module.exports = pPromise
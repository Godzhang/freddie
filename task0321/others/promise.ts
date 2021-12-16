type Status = 'pending' | 'fulfilled' | 'rejected';
type ResRej = (value: any) => void;
type Handle = (
  resolve: ResRej,
  reject?: ResRej,
) => void;
class MyPromise<T> {
  private status: Status = 'pending';
  private value!: T;
  private fulfilledFns: Function[] = [];
  private rejectedFns: Function[] = [];
  constructor (handle: Handle) {
    if (typeof handle !== 'function') {
      throw TypeError('arguments must be a function');
    }
    try {
      handle(
        this.resolve.bind(this),
        this.reject.bind(this),
      );
    } catch (err) {
      this.reject(err);
    }
  }
  static resolve (
    value: any,
  ): MyPromise<any> {
    return value instanceof MyPromise
      ? value
      : new MyPromise(resolve => resolve(value));
  };
  private run (
    status: Status,
    tasks: Function[],
  ): void {
    this.status = status;
    let cb: Function | undefined;
    while (cb = tasks.shift()) {
      cb(this.value);
    }
  }
  private resolve (val: any): void {
    if (this.status !== 'pending') return;
    this.value = val;
    setTimeout(() => {
      this.run('fulfilled', this.fulfilledFns);
    }, 0);
  }
  private reject (val: any): void {
    if (this.status !== 'pending') return;
    this.value = val;
    setTimeout(() => {
      this.run('rejected', this.rejectedFns);
    }, 0)
  }
  public then(
    resolve: ResRej,
    reject: ResRej = () => {},
  ): MyPromise<T> {
    switch (this.status) {
      case 'pending':
        this.fulfilledFns.push(resolve);
        this.rejectedFns.push(reject);
        break;
      case 'fulfilled':
        resolve(this.value);
        break;
      case 'rejected':
        reject(this.value);
        break;
    }
    return this;
  }
}
var p = new MyPromise(resolve => {
  resolve(333);
});
p.then(res => console.log(res, 'async'));
console.log('sync');

// p.then(res => {
//   console.log(1, res);
//   return 444;
// });
// p.then(res => {
//   console.log(2, res);
//   return 555;
// });
// setTimeout(() => {
//   console.log('setTimeout');
// });
// var pstatic = MyPromise.resolve('1');
// pstatic.then(res => console.log(res));
// pstatic.then(res => console.log(res));

class Stach {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(item) {
    this.items[this.count++] = item;
  }

  pop() {
    if (this.count === 0) return undefined;

    this.count--;
    let result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.count === 0) return undefined;

    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  size() {
    return this.count;
  }

  from(arr) {
    this.clear();
    arr.forEach(item => this.push(item));
    return this.items;
  }

  toString() {
    if (this.isEmpty()) return "";

    let str = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      str = `${str},${this.items[i]}`;
    }
    return str;
  }
}

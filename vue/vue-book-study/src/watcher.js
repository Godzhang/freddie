import { parsePath } from "./utils";

class Watcher {
  constructor(vm, expOrFn, cb) {
    this.vm = vm;
    this.deps = [];
    this.depIds = new Set();
    if (typeof expOrFn === "function") {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
    }
    this.cb = cb;
    this.value = this.get();
  }

  get() {
    window.target = this;
    let value = this.getter.call(this.vm, this.vm);
    window.target = undefined;
    return value;
  }

  update() {
    const oldValue = this.value;
    this.value = this.get();
    this.cb.call(this.vm, this.value, oldValue);
  }

  // 记录自己都被哪些dep订阅过
  addDep(dep) {
    const id = dep.id;
    if (!this.depIds.has(id)) {
      this.deps.push(dep);
      this.depIds.add(id);
      dep.addSub(this);
    }
  }

  teardown() {
    let i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
  }
}

export default Watcher;

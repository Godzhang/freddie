import Dep from "./dep.js";
import Observer, { set } from "./observer";
import Watcher from "./watcher";
import { isObject, hasOwn } from "./utils";

export function defineReactive(data, key, value) {
  let childOb = observe(value);
  let dep = new Dep();
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log("getter: " + key);
      dep.depend();

      // 此处收集的依赖，只会在数组重写过的方法里触发
      if (childOb) {
        childOb.dep.depend();
      }

      return value;
    },
    set: function (newValue) {
      console.log("setter: " + key);
      if (value === newValue) return;
      value = newValue;
      dep.notify();
    },
  });
}

export function observe(value, asRootData) {
  if (!isObject(value)) {
    return;
  }
  let ob;
  // 如果已经是响应式，不需要重复创建，直接返回已有的 Observer 实例
  if (hasOwn(value, "__ob__") && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else {
    ob = new Observer(value);
  }
  return ob;
}

class Vue {
  constructor(options) {
    this.data = options.data;

    this.observe();
    this.proxyData();
  }

  observe() {
    for (let key in this.data) {
      defineReactive(this.data, key, this.data[key]);
    }
  }

  proxyData() {
    for (let key in this.data) {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return this.data[key];
        },
        set(newValue) {
          if (newValue === this.data[key]) return;
          this.data[key] = newValue;
        },
      });
    }
  }

  // deep: true has problem ???
  $watch(expOrFn, cb, options = {}) {
    const vm = this;
    const watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  }
}

Vue.prototype.$set = set;

export default Vue;

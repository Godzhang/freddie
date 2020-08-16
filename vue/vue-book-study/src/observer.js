import { defineReactive, observe } from "./vue";
import { arrayMethods } from "./array-methods";
import Dep from "./dep";

const hasProto = "__proto__" in {};
const arrayKeys = Object.getOwnPropertyNames(arrayMethods);

class Observer {
  constructor(value) {
    this.value = value;
    this.dep = new Dep(); // 用来收集 array 的依赖
    def(value, "__ob__", this);

    if (Array.isArray(value)) {
      const augment = hasProto ? protoAugment : copyAugment;
      augment(value, arrayMethods, arrayKeys);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }

  observeArray(items) {
    for (let i = 0, len = items.length; i < len; i++) {
      observe(items[i]);
    }
  }

  walk(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i], obj[keys[i]]);
    }
  }
}

function protoAugment(target, src, keys) {
  target.__proto__ = src;
}

function copyAugment(target, src, keys) {
  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i];
    def(target, key, src[key]);
  }
}

export function def(obj, key, value, enumerable) {
  Object.defineProperty(obj, key, {
    value,
    enumerable: !!enumerable,
    writable: true,
    configurable: true,
  });
}

export function set(target, key, value) {}

export default Observer;

import { def } from "./observer";

const arrayProto = Array.prototype;
export const arrayMethods = Object.create(arrayProto);

["push", "pop", "unshift", "shift", "splice", "sort", "reverse"].forEach(
  (method) => {
    // 缓存原始方法
    const original = arrayProto[method];
    def(arrayMethods, method, function mutator(...args) {
      const result = original.apply(this, args);
      const ob = this.__ob__;
      let inserted;
      switch (method) {
        case "push":
        case "unshift":
          inserted = args;
          break;
        case "splice":
          inserted = args.slice(2);
          break;
      }
      if (inserted) ob.observeArray(inserted); // 将新增元素处理成响应式的
      ob.dep.notify();
      return result;
    });
  }
);

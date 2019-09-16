class Store {
  constructor(options = {}, Vue) {
    this.options = options;
    this.getters = {};

    forEachValue(options.getters, (getterFn, getterName) => {
      registerGetter(this, getterName, getterFn);
    });

    Vue.mixin({ beforeCreate: vuexInit });
  }
  get state() {
    return this.options.state;
  }
}

function vuexInit() {
  const options = this.$options;
  if (options.store) {
    // 组件内部设定了store,则优先使用组件内部的store
    this.$store =
      typeof options.store === "function" ? options.store() : options.store;
  } else if (options.parent && options.parent.$store) {
    // 组件内部没有设定store,则从根App.vue下继承$store方法
    this.$store = options.parent.$store;
  }
}

// 将对象中的每一个值放入到传入的函数中作为参数执行
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key));
}

function registerGetter(store, getterName, getterFn) {
  Object.defineProperty(store.getters, getterName, {
    get: () => {
      return getterFn(store.state);
    }
  });
}

export default { Store };

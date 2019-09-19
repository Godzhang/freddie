import Vue from "vue";

class Store {
  constructor(options = {}, Vue) {
    Vue.mixin({ beforeCreate: vuexInit });
    this.options = options;
    this.getters = {};
    this.mutations = {};
    this.actions = {};
    this._modules = new ModuleCollection(options);

    const { dispatch, commit } = this;
    this.commit = (type, payload) => {
      return commit.call(this, type, payload);
    };
    this.dispatch = (type, payload) => {
      return dispatch.call(this, type, payload);
    };

    forEachValue(options.getters, (getterFn, getterName) => {
      registerGetter(this, getterName, getterFn);
    });
    forEachValue(options.mutations, (mutationFn, mutationName) => {
      registerMutation(this, mutationFn, mutationName);
    });
    forEachValue(options.actions, (actionFn, actionName) => {
      registerAction(this, actionFn, actionName);
    });

    const path = []; //初始路径给根路径为空
    installModule(this, state, path, this._modules.root);

    this._vm = new Vue({
      data: {
        state: options.state
      }
    });
  }
  get state() {
    return this._vm._data.state;
  }

  commit(type, payload) {
    this.mutations[type](payload);
  }
  dispatch(type, payload) {
    return this.actions[type](payload);
  }
}

class ModuleCollection {
  constructor(rawRootModule) {
    this.register([], rawRootModule);
  }
}

function installModule(store, rootState, path, module) {}

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

function registerMutation(store, mutationFn, mutationName) {
  store.mutations[mutationName] = () => {
    mutationFn.call(store, store.state);
  };
}

function registerAction(store, actionFn, actionName) {
  store.actions[actionName] = () => {
    actionFn.call(store, store);
  };
}

export default { Store };

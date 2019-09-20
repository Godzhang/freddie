let _Vue;
class Store {
  constructor(options = {}, Vue) {
    this.options = options;
    this.getters = {};
    this._mutations = {};
    this._actions = {};
    this._modules = new ModuleCollection(options);

    console.log(this);

    const { dispatch, commit } = this;
    this.commit = (type, payload) => {
      return commit.call(this, type, payload);
    };
    this.dispatch = (type, payload) => {
      return dispatch.call(this, type, payload);
    };

    const state = options.state;
    const path = []; //初始路径给根路径为空
    installModule(this, state, path, this._modules.root);

    this._vm = new Vue({
      data: {
        state
      }
    });
  }
  get state() {
    return this._vm._data.state;
  }

  commit(type, payload) {
    this._mutations[type].forEach(handler => handler(payload));
  }
  dispatch(type, payload) {
    return this._actions[type][0](payload);
  }
}

class ModuleCollection {
  constructor(rawRootModule) {
    this.register([], rawRootModule);
  }
  register(path, rawModule) {
    const newModule = {
      _children: {},
      _rawModule: rawModule,
      state: rawModule.state
    };
    if (path.length === 0) {
      this.root = newModule;
    } else {
      const parent = path.slice(0, -1).reduce((module, key) => {
        return module._children[key];
      }, this.root);
      parent._children[path[path.length - 1]] = newModule;
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, (rawChildModule, key) => {
        this.register(path.concat(key), rawChildModule);
      });
    }
  }
}

function installModule(store, rootState, path, module) {
  if (path.length > 0) {
    const parentState = rootState;
    const moduleName = path[path.length - 1];
    _Vue.set(parentState, moduleName, module.state);
  }

  const context = {
    dispatch: store.dispatch,
    commit: store.commit
  };

  const local = Object.defineProperties(context, {
    getters: {
      get: () => store.getters
    },
    state: {
      get: () => {
        let state = store.state;
        return path.length ? state[path[path.length - 1]] : state;
      }
    }
  });

  if (module._rawModule.actions) {
    forEachValue(module._rawModule.actions, (actionFn, actionName) => {
      registerAction(store, actionFn, actionName, local);
    });
  }
  if (module._rawModule.getters) {
    forEachValue(module._rawModule.getters, (getterFn, getterName) => {
      registerGetter(store, getterName, getterFn, local);
    });
  }
  if (module._rawModule.mutations) {
    forEachValue(module._rawModule.mutations, (mutationFn, mutationName) => {
      registerMutation(store, mutationFn, mutationName, local);
    });
  }

  forEachValue(module._children, (child, key) => {
    installModule(store, rootState, path.concat(key), child);
  });
}

// 将对象中的每一个值放入到传入的函数中作为参数执行
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key));
}

function registerGetter(store, getterName, getterFn, local) {
  Object.defineProperty(store.getters, getterName, {
    get: () => {
      return getterFn(local.state, local.getters, store.state);
    }
  });
}

function registerMutation(store, mutationFn, mutationName, local) {
  const entry =
    store._mutations[mutationName] || (store._mutations[mutationName] = []);
  entry.push(payload => {
    mutationFn.call(store, local.state, payload);
  });
}

function registerAction(store, actionFn, actionName, local) {
  const entry = store._actions[actionName] || (store._actions[actionName] = []);
  entry.push(payload => {
    actionFn.call(
      store,
      {
        commit: local.commit,
        state: local.state
      },
      payload
    );
  });
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

function install(Vue) {
  _Vue = Vue;
  Vue.mixin({ beforeCreate: vuexInit });
}

export default { Store, install };

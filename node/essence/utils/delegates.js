// 用于将proto接收到的操作委托到target内部属性进行处理
class Delegates {
  constructor(proto, target) {
    this.proto = proto;
    this.target = target;
    this.methods = [];
    this.getters = [];
    this.setters = [];
    this.fluents = [];
  }

  access(name) {
    return this.getter(name).setter(name);
  }

  getter(name) {
    const { proto, target } = this;
    this.getters.push(name);
    const descriptor = Object.getOwnPropertyDescriptor(proto, name);

    // proto.__defineGetter__(name, function () {
    //   return this[target][name];
    // });
    Object.defineProperty(proto, name, {
      configurable: true,
      enumerable: true,
      set(val) {
        if (descriptor.set) {
          return descriptor.set(val);
        }
        return val;
      },
      get() {
        return proto[target][name];
      },
    });

    return this;
  }

  setter(name) {
    const { proto, target } = this;
    this.setters.push(name);
    const descriptor = Object.getOwnPropertyDescriptor(proto, name);

    // proto.__defineSetter__(name, function (val) {
    //   return (this[target][name] = val);
    // });
    Object.defineProperty(proto, name, {
      configurable: true,
      enumerable: true,
      set(val) {
        return (proto[target][name] = val);
      },
      get() {
        if (descriptor.get) {
          return descriptor.get();
        }
        return;
      },
    });

    return this;
  }

  method(name) {
    const { proto, target } = this;
    this.methods.push(name);

    proto[name] = function () {
      this[target][name].apply(this[target], arguments);
    };

    return this;
  }

  fluent(name) {
    const { proto, target } = this;
    this.fluents.push(name);

    proto[name] = function (val) {
      if (typeof val === "undefined") {
        return this[target][name];
      } else {
        this[target][name] = val;
        return this;
      }
    };

    return this;
  }

  static auto(proto, targetProto, targetProp) {
    const delegate = new Delegates(proto, targetProp);
    const properties = Object.getOwnPropertyNames(targetProto);
    for (let i = 0, len = properties.length; i < len; i++) {
      const property = properties[i];
      const descriptor = Object.getOwnPropertyDescriptor(targetProto, property);
      if (descriptor.get) {
        delegate.getter(property);
      }
      if (descriptor.set) {
        delegate.setter(property);
      }
      if (descriptor.hasOwnProperty("value")) {
        // could be undefined but writable
        const value = descriptor.value;
        if (value instanceof Function) {
          delegate.method(property);
        } else {
          delegate.getter(property);
        }
        if (descriptor.writable) {
          delegate.setter(property);
        }
      }
    }
  }
}

const delegate = (proto, target) => new Delegates(proto, target);

module.exports = delegate;

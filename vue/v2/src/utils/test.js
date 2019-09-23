let Vue;

function install(_Vue) {
  if (Vue) {
    if (process.env.NODE_ENV !== "production") {
      console.error("has already installed");
    }
  }
  Vue = _Vue;
  applyMixin(Vue);
}

function applyMixin(Vue) {
  Vue.mixin({ beforeCreate: init });
}

function init() {
  const options = this.$options;
  if (options.code) {
    this.$code = options.code;
  } else if (options.parent && options.parent.$code) {
    this.$code = options.parent.$code + 1;
  }
}

export default { install };

import Toast from "./Toast.vue";

const obj = {};

obj.install = function(Vue) {
  // console.log(Object.assign({}, Toast));
  // console.log(Toast);
  const ToastContrystor = Vue.extend(Toast);
  // console.log(ToastContrystor);
  const toast = new ToastContrystor();
  // console.log(toast);
  toast.$mount(document.createElement("div"));
  document.body.appendChild(toast.$el);
  Vue.prototype.$toast = {
    show(message, duration) {
      toast.message = message;
      toast.isShow = true;
      setTimeout(() => {
        toast.isShow = false;
        toast.message = "";
      }, duration);
    }
  };
};

export default obj;

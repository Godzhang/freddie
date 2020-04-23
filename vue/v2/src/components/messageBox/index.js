import msgBox from "./MessageBox.vue";

const MessageBox = {};

MessageBox.install = function(Vue, options) {
  const MessageBoxInstance = Vue.extend(msgBox);
  let currentMsg = null;
  const initInstance = () => {
    currentMsg = new MessageBoxInstance();
    let msgBoxEl = currentMsg.$mount().$el;
    document.body.appendChild(msgBoxEl);
  };
  Vue.prototype.$msgBox = {
    showMsgBox(options) {
      if (!currentMsg) {
        initInstance();
      }
      if (typeof options === "string") {
        currentMsg.content = options;
      } else {
        Object.assign(currentMsg, options);
      }

      return currentMsg
        .showMsgBox()
        .then(val => {
          currentMsg = null;
          // return Promise.resolve(val);
          return val;
        })
        .catch(err => {
          currentMsg = null;
          return Promise.reject(err);
        });
    }
  };
};

export default MessageBox;

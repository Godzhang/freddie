import Vue from "vue";
import Dialog from "./Dialog";

const props = {};

const instance = new Vue({
  render(h) {
    return h(Dialog, {
      props
    });
  }
});
console.log(instance);

const component = instance.$mount();
document.body.appendChild(component.$el);

// const DialogComponent = Vue.extend(Dialog);

// console.log(Dialog);

// const instance = new DialogComponent();
// console.log(instance);

// const component = instance.$mount();

// console.log(component);

// document.body.appendChild(component.$el);

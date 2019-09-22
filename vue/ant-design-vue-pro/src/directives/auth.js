function check(authority) {
  return authority.includes("author");
}

function install(Vue, options = {}) {
  Vue.directive(options.name || "author", {
    inserted(el, binding) {
      if (!check(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  });
}

export default { install };

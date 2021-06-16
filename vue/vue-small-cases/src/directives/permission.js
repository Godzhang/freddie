export default {
  inserted(el, bindings, vnode) {
    const btnPermissionValue = bindings.value;
    const boolean =
      vnode.context.$store.state.btnPremission[btnPermissionValue];
    !boolean && el.parentNode.removeChild(el);
  }
};

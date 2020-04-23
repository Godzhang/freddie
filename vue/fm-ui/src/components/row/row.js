export default {
  name: "FMRow",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  render(h) {
    return h(
      this.tag,
      {
        class: "fm-row"
      },
      this.$slots.default
    );
  }
};

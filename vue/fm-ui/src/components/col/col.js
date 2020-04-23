export default {
  name: "FMCol",
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
        class: "fm-col"
      },
      this.$slots.default
    );
  }
};

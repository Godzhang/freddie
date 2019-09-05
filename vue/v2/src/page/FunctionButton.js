export default {
  name: "functional-button",
  functional: true,
  inject: ["foo"],
  render(h, ctx) {
    console.log(ctx);
    let { data, children } = ctx;
    return h("button", data, ["hello ", ...children]);
  }
};

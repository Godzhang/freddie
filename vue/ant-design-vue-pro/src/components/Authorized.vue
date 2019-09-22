<script>
function check(authority) {
  return authority.includes("author");
}
export default {
  functional: true,
  props: {
    authority: {
      type: Array,
      requried: true
    }
  },
  render(h, context) {
    const { props, scopedSlots } = context;
    return check(props.authority) ? scopedSlots.default() : null;
  }
};
</script>
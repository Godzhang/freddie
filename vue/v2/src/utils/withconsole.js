export default function WithConsole(WrappedComponent) {
  return {
    render(h) {
      console.log(this);
      const slots = Object.keys(this.$slots)
        .reduce((arr, key) => {
          return arr.concat(this.$slots[key]);
        }, [])
        .map(vnode => {
          vnode.context = this._self;
          return vnode;
        });

      return h(
        WrappedComponent,
        {
          on: this.$listeners,
          attrs: this.$attrs,
          props: this.$props,
          scopedSlots: this.$scopedSlots
        },
        slots
      );
    },
    props: WrappedComponent.props,
    mounted() {
      console.log("I have already mounted");
    }
  };
}

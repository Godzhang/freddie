export default {
  functional: true,
  inject: ['tableRoot'],
  props: {
    row: Object,
    column: Object,
    index: Number
  },
  render: (h, ctx) => {
    let { row, column, index } = ctx.props
    return h('div', ctx.injections.tableRoot.$scopedSlots[ctx.props.column.slot]({
      row,
      column,
      index
    }))
  }
}

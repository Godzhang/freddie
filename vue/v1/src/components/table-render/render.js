export default {
  functional: true,
  props: {
    row: Object,
    column: Object,
    index: Number,
    render: Function
  },
  render: (h, ctx) => {
    let { row, column, index } = ctx.props
    const params = { row, column, index }

    return ctx.props.render(h, params)
  }
}
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import actions from "../../../redux/actions/index";
import ColorPicker from "../ColorPicker/ColorPicker";

const reg = /rgba\((\d+),\s?(\d+),\s?(\d+),\s?([\d\.]+)\)/;

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: reg.exec(this.props.default)
        ? {
            r: RegExp.$1,
            g: RegExp.$2,
            b: RegExp.$3,
            a: RegExp.$4,
          }
        : null,
    };
  }
  changeColor(color) {
    this.setState({ color });
  }
  handleClose(color) {
    const { a, b, g, r } = color;
    this.props.actions[this.props.action](`rgba(${r},${g},${b},${a})`);
  }
  render() {
    return (
      <ColorPicker
        color={this.state.color}
        handleClose={this.handleClose.bind(this)}
        changeColor={this.changeColor.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  chartConfig: state.chartConfig,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Color);

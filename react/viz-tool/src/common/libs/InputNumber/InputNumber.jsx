import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { InputNumber as AInputNumber } from "antd";
import actions from "../../../redux/actions/index";

class InputNumber extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = (value) => {
    this.props.actions[this.props.action](value);
  };
  render() {
    const { itemKey } = this.props;
    return (
      <AInputNumber
        defaultValue={this.props.chartConfig[itemKey].value}
        onChange={this.handleChange}
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

export default connect(mapStateToProps, mapDispatchToProps)(InputNumber);

import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Input as AInput } from "antd";
import actions from "../../../redux/actions/index";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e) => {
    this.props.actions[this.props.action](e.target.value);
  };
  render() {
    const { itemKey } = this.props;
    return (
      <AInput
        defaultValue={this.props.chartConfig[itemKey].value}
        onBlur={this.handleChange}
        onPressEnter={this.handleChange}
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

export default connect(mapStateToProps, mapDispatchToProps)(Input);

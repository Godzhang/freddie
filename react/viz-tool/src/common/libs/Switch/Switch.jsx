import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Switch as ASwitch } from "antd";
import actions from "../../../redux/actions/index";

class Switch extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = (checked) => {
    this.props.actions[this.props.action](checked);
  };
  render() {
    const { itemKey } = this.props;
    return (
      <ASwitch
        size="small"
        defaultChecked={this.props.chartConfig[itemKey].value}
        onChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  chartConfig: state.chartConfig,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Switch);

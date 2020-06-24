import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Select as ASelect } from "antd";
import actions from "../../../redux/actions/index";

const { Option } = ASelect;

class Select extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = (value) => {
    this.props.actions[this.props.action](value);
  };
  render() {
    const { itemKey } = this.props;
    return (
      <ASelect
        defaultValue={this.props.chartConfig[itemKey].value}
        style={{ width: 246 }}
        onChange={this.handleChange}
      >
        {this.props.options.map((option) => (
          <Option value={option.value} key={option.value}>{option.label}</Option>
        ))}
      </ASelect>
    );
  }
}

const mapStateToProps = (state) => ({
  chartConfig: state.chartConfig,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Select);

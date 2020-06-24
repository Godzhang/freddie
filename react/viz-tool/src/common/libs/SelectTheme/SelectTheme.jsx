import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Select as ASelect, Tag } from "antd";
import actions from "../../../redux/actions/index";
import "./SelectTheme.less";

const { Option } = ASelect;

const colors = {
  color1: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#50E3C2"],
  color2: ["#08c", "#F5A623", "#F8E71C", "#8B572A", "#000"],
};

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
        className="theme-select"
        defaultValue={this.props.chartConfig[itemKey].value}
        style={{ width: 246 }}
        onChange={this.handleChange}
      >
        {this.props.options.map((option) => (
          <Option
            value={option.value}
            key={option.value}
            className="theme-option"
          >
            <div className={["theme", `${option.value}`].join(" ")}></div>
          </Option>
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

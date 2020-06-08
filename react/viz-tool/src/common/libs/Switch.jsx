import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Switch } from "antd";
import actions from "../../redux/actions/index";

class CSwitch extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = (checked) => {
    this.props.actions[this.props.action](checked);
  };
  render() {
    return (
      <Switch
        size="small"
        defaultChecked={this.props[this.props.config][this.props.itemKey].value}
        onChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  textConfig: state.textConfig,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CSwitch);

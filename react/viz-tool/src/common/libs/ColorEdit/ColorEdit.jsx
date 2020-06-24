import React from "react";
import { Row, Col, Button } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import actions from "../../../redux/actions/index";
import "./ColorEdit.less";
import ColorPicker from "../ColorPicker/ColorPicker";

class ColorEdit extends React.Component {
  constructor(props) {
    super(props);
    const { chartConfig, itemKey } = this.props;
    const value = chartConfig[itemKey].value;
    this.state = { colors: value };
  }
  resetColor = () => {
    const { value, origin } = this.props.chartConfig[this.props.itemKey];
    let isEqual = value.filter((v) => !origin.includes(v)).length === 0;
    if (isEqual) return;
    this.props.actions["resetColors"]();
  };
  handleClose = (index, color) => {
    this.props.actions[this.props.action](this.state.colors[index], index);
  };
  changeColor(index, color) {
    const colors = this.props.chartConfig[this.props.itemKey].value;
    const oldValue = colors[index];
    color =
      typeof color === "string"
        ? color
        : `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    if (oldValue === color) return;
    colors[index] = color;
    this.setState({ colors });
  }
  render() {
    // const { chartConfig, itemKey } = this.props;
    // const value = chartConfig[itemKey].value;

    return (
      <Row className="color-edit-box" align="top">
        <Col span={19} className="list">
          {this.state.colors.map((color, index) => (
            <ColorPicker
              color={color}
              key={index}
              size="small"
              handleClose={this.handleClose.bind(this, index)}
              changeColor={this.changeColor.bind(this, index)}
            />
          ))}
        </Col>
        <Col span={5} style={{ textAlign: "center" }}>
          <Button type="text" size="small" onClick={this.resetColor}>
            重置
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  chartConfig: state.chartConfig,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorEdit);

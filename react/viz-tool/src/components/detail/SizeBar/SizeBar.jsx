import React from "react";
import "./SizeBar.less";
import { Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import sizeActions from "../../../redux/actions/sizeAction";
import { ReactComponent as PcSvg } from "@/images/sizeBar/pc.svg";
import { ReactComponent as PcActiveSvg } from "@/images/sizeBar/pc-active.svg";
import { ReactComponent as PhoneSvg } from "@/images/sizeBar/phone.svg";
import { ReactComponent as PhoneActiveSvg } from "@/images/sizeBar/phone-active.svg";

const sizeLimit = (size, min = 300) => Math.max(size, min);

class SizeBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      width: this.props.chartSize.width,
      height: this.props.chartSize.height,
    };
    // 区分动态图与静态图
    this.type = this.props.match.params.type;
  }
  changeScale(index, scale) {
    if (this.state.activeIndex === index) return;
    this.setState({ activeIndex: index });
    this.props.sizeActions.setChartScale(scale);
    this.props.sizeActions.calcChartSize();
  }
  changeSize(e, attr) {
    let width = this.props.chartSize.width,
      height = this.props.chartSize.height;
    if (attr === "width") {
      width = sizeLimit(+e.target.value);
    } else {
      height = sizeLimit(+e.target.value);
    }
    this.setState({ width, height });
    this.props.sizeActions.setChartSize(width, height);
  }
  render() {
    return (
      <div className="size-bar">
        {this.type === "dynamic" ? (
          <>
            <button
              className={[
                "st",
                "pc",
                this.state.activeIndex === 0 ? "active" : "",
              ].join(" ")}
              onClick={() => {
                this.changeScale(0, 16 / 9);
              }}
            >
              {this.state.activeIndex === 0 ? <PcActiveSvg /> : <PcSvg />}
            </button>
            <button
              className={[
                "st",
                "phone",
                this.state.activeIndex === 1 ? "active" : "",
              ].join(" ")}
              onClick={() => {
                this.changeScale(1, 9 / 16);
              }}
            >
              {this.state.activeIndex === 1 ? <PhoneActiveSvg /> : <PhoneSvg />}
            </button>
          </>
        ) : (
          <div className="custom-size">
            <Input
              size="small"
              style={{ width: "50px", height: "30px", textAlign: "center" }}
              defaultValue={this.props.chartSize.width}
              value={this.state.width}
              onChange={(e) => {
                this.setState({ width: +e.target.value });
              }}
              onBlur={(e) => this.changeSize(e, "width")}
              onPressEnter={(e) => this.changeSize(e, "width")}
            />
            <CloseOutlined className="icon-ride" />
            <Input
              size="small"
              style={{ width: "50px", height: "30px", textAlign: "center" }}
              defaultValue={this.props.chartSize.height}
              value={this.state.height}
              onChange={(e) => {
                this.setState({ height: +e.target.value });
              }}
              onBlur={(e) => this.changeSize(e, "height")}
              onPressEnter={(e) => this.changeSize(e, "height")}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  chartSize: state.chartSize,
});

const mapDispatchToProps = (dispatch) => ({
  sizeActions: bindActionCreators(sizeActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SizeBar));

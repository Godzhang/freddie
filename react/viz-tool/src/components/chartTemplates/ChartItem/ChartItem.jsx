import React from "react";
// import { ReadOutlined } from "@ant-design/icons";
import "./ChartItem.scss";
import { Link } from "react-router-dom";

class ChartItem extends React.Component {
  // showInfo() {
  //   this.refs.info.classList.add("open");
  // }
  render() {
    return (
      <div className="chart-item">
        <div className="show">
          <div className="image">
            <img
              src="https://hanabi.cn/static/chartimg/barChartRace.gif"
              alt=""
            />
          </div>
          <div className="name">基础柱状图</div>
        </div>
        <div className="hide">
          <Link to="/detail" className="image">
            <img
              src="https://hanabi.cn/static/chartimg/barChartRace.gif"
              alt=""
            />
          </Link>
          <div className="name">基础柱状图</div>
          {/* <ReadOutlined className="show-info" /> */}
          {/* <ReadOutlined
            className="show-info"
            onClick={this.showInfo.bind(this)}
          /> */}
          <div className="info" ref="info">
            <p className="desc">
              基础柱状图基础柱状图基础柱状图基础柱状图基础柱状图基础柱状图
            </p>
            <h4>使用场景</h4>
            <p className="desc">使用场景使用场景使用场景使用场景使用场景</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartItem;

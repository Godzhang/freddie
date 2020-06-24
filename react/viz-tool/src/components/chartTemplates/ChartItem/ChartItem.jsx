import React from "react";
import "./ChartItem.less";
import { Link } from "react-router-dom";
import { ChartsDetail } from "../../../common/global/charts";

class ChartItem extends React.Component {
  render() {
    let chart = this.props.chartType;
    let url =
      chart._type === "dynamic"
        ? require(`../../../images/chartTemplates/${chart._cid}.gif`)
        : require(`../../../images/chartTemplates/${chart._cid}.svg`);
    let chartImg = <img src={url} alt={chart} />;
    return (
      <div className="chart-item">
        <div className="show">
          <div className="image">{chartImg}</div>
          <div className="name">{chart._name}</div>
        </div>
        <div className="hide">
          <Link
            to={`/detail/${chart._type}/${chart._cid}`}
            className="image"
            target="_blank"
          >
            {chartImg}
          </Link>
          <div className="info" ref="info">
            <h4 className="name">{ChartsDetail[chart._cid]._chartname}</h4>
            <p className="desc">{ChartsDetail[chart._cid]._application}</p>
            <h4 className="name">使用场景</h4>
            <p className="desc">{ChartsDetail[chart._cid]._usescenario}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartItem;

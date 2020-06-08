import React from "react";
import "./ChartDisplay.scss";
import { connect } from "react-redux";

class ChartDisplay extends React.Component {
  render() {
    const { chartConfig = {}, textConfig = {} } = this.props;
    return (
      <div className="chart-display">
        <div>{textConfig.isShowTitle.value.toString()}</div>
        <div>{textConfig.isShowSource.value.toString()}</div>
        {/* <h3>chart display</h3>
        {Object.keys(chartConfig).map((key) => (
          <div key={key}>
            <h3>{chartConfig[key].title}</h3>
            {chartConfig[key].items.map((item) => (
              <div key={item.label}>
                <span>{item.label}: </span>
                <br />
                <span>{item.value.toString()}</span>
                <hr />
              </div>
            ))}
          </div>
        ))} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  textConfig: state.textConfig,
});

export default connect(mapStateToProps)(ChartDisplay);

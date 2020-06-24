import React from "react";
import "./Charts.less";
import PropTypes from "prop-types";
import ChartItem from "../ChartItem/ChartItem";

class Charts extends React.Component {
  static defaultProps = {
    charts: [{ _name: "", _cid: "" , _type: ""}],
  };

  render() {
    return (
      <div className="charts">
        { this.props.charts.map((item, index) => (
          <ChartItem show={index === 0} key={index} chartType={item}/>
        ))}
      </div>
    );
  }
}

Charts.propTypes = {
  charts: PropTypes.arrayOf(
    PropTypes.shape({
      _name: PropTypes.string.isRequired,
      _cid: PropTypes.string,
      _type: PropTypes.string
    })
  ),
};

export default Charts;

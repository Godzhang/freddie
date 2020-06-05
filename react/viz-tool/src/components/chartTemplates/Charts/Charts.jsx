import React from "react";
import ChartItem from "../ChartItem/ChartItem";
import "./Charts.scss";
import PropTypes from "prop-types";

class Charts extends React.Component {
  static defaultProps = {
    charts: [{ name: "" }],
  };
  static propTypes = {
    charts: PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        })
      )
    ),
  };
  render() {
    return (
      <div className="charts">
        {Array(30)
          .fill("")
          .map((item, index) => (
            <ChartItem show={index === 0} key={index} />
          ))}
      </div>
    );
  }
}

export default Charts;

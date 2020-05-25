import React from "react";

class ChartType extends React.Component {
  render() {
    return (
      <div>
        <h3>ChartType Page</h3>
        {this.props.children}
      </div>
    );
  }
}

export default ChartType;

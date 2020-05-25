import React from "react";

class ChartDetail extends React.Component {
  render() {
    return (
      <div>
        <h3>ChartDetail Page</h3>
        {this.props.children}
      </div>
    );
  }
}

export default ChartDetail;

import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>home page</h3>
        <Link to="/demo">
          <Button>demo</Button>
        </Link>
        <Link to="/templates">
          <Button>chartType</Button>
        </Link>
        <Link to="/detail/line">
          <Button>chartDetail</Button>
        </Link>
      </div>
    );
  }
}

export default Home;

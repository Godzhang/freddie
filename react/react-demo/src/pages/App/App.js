import React from "react";
import "./App.scss";
import { Link } from "react-router-dom";
import { Button } from "antd";

function App() {
  return (
    <div className="App">
      <Link to="/chart">
        <Button type="primary">chart page</Button>
      </Link>
      <br />
      <br />
      <Link to="/lifecycle">
        <Button type="primary">lifecycle page</Button>
      </Link>
      <br />
      <br />
      <Link to="/hook">
        <Button type="primary">hook page</Button>
      </Link>
      <br />
      <br />
      <Link to="/demo">
        <Button type="primary">demo test page</Button>
      </Link>
    </div>
  );
}

export default App;

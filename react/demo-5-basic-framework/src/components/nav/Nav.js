import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <ul>
        <li style={{ display: this.props.isLogin ? "none" : "block" }}>
          <Link to="/">Login</Link>
        </li>
        <li style={{ display: this.props.isLogin ? "block" : "none" }}>
          <Link to="/Home">Home</Link>
        </li>
        <li style={{ display: this.props.isLogin ? "block" : "none" }}>
          <Link to="/About">About us</Link>
        </li>
      </ul>
    );
  }

  componentDidMount() {
    console.log("Nav render complete");
  }
}

export default Nav;

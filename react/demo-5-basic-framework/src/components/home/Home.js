import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    if (this.props.isLogin === false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div>
          <button onClick={this.userLogout.bind(this)}>Logout</button>
        </div>
        <div>
          <h3>Home</h3>
          <p>Hi, this is home page</p>
        </div>
      </div>
    );
  }
  userLogout() {
    this.props.LOGOUT(this.props.history);
  }
  componentDidMount() {
    console.log("Home render completed");
  }
}

export default Home;

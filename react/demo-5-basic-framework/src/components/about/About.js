import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <div>
          <button onClick={this.userLogout.bind(this)}>Logout</button>
        </div>
        <div>
          <h3>Home</h3>
          <p>Hi, this is about page</p>
        </div>
      </div>
    );
  }
  userLogout() {
    this.props.LOGOUT(this.props.history);
  }
  componentDidMount() {
    console.log("about render completed");
  }
}

export default About;

import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <h3>Login Page</h3>
        <div>
          Username: <input type="text" ref="username" />
        </div>
        <div>
          Password: <input type="password" ref="password" />
        </div>
        <div>
          <button onClick={this.userLogin.bind(this)}>Login</button>
        </div>
      </div>
    );
  }

  userLogin() {
    this.props.LOGIN(
      this.refs.username.value,
      this.refs.password.value,
      this.props.history
    );
  }

  componentDidMount() {
    console.log("login render complete");
  }
}

export default Login;

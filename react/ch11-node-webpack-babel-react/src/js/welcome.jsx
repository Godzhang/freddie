import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

class WelcomeComp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>Hello, webpack + babel + react!</p>;
  }
}

ReactDOM.render(<WelcomeComp />, root);

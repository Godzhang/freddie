import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <h3>Home Page</h3>
        {this.props.children}
      </div>
    );
  }
}

export default Home;

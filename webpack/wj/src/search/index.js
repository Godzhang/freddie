import React from "react";
import ReactDom from "react-dom";
import you from "./China.png";
import "./search.less";
import { common } from "../../common/index.js";

common();

class Search extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      Text: null
    };
  }

  loadComponent() {
    import("./text.js").then(res => {
      this.setState({
        Text: res.default
      });
    });
  }

  render() {
    const { Text } = this.state;
    return (
      <div className="search-text">
        {Text ? <Text /> : null}
        search text
        <img onClick={this.loadComponent.bind(this)} src={you} />
      </div>
    );
  }
}

ReactDom.render(<Search />, document.getElementById("root"));

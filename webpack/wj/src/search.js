import React from "react";
import ReactDom from "react-dom";
import you from "./images/China.png";
import "./search.less";

class Search extends React.Component {
  render() {
    return (
      <div className="search-text">
        search text
        <img src={you} />
      </div>
    );
  }
}

ReactDom.render(<Search />, document.getElementById("root"));

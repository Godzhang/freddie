import React from "react";
import "./Header.scss";
import MainHeader from "./MainHeader/MainHeader";
import DetailHeader from "./DetailHeader/DetailHeader";
import PropTypes from "prop-types";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    path: "/",
  };
  static propTypes = {
    path: PropTypes.string,
  };
  render() {
    return (
      <div className="tutu-header">
        {this.props.path.indexOf("detail") > -1 ? (
          <DetailHeader />
        ) : (
          <MainHeader />
        )}
      </div>
    );
  }
}

export default Header;

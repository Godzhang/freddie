import React, { FC, useState } from "react";
import classnames from "classnames";
import { MenuIcon } from "@/images/svg";
import "./index.scss";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sideBarClass = classnames("sidebar", {
    expanded: isExpanded,
  });
  return (
    <div className="s-container">
      <div className={sideBarClass}>
        <i
          className="menu-action-icon"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <MenuIcon style={{ width: "40px", height: "32px" }} />
        </i>
        <div className="menu-logo">
          <i className="logo"></i>
          <div className="desc">
            <p>NEWS</p>
            <p>RADAR</p>
          </div>
        </div>
        <div className="menu-tree"></div>
      </div>
    </div>
  );
};

export default SideBar;

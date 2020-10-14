import React, { FC, useState } from "react";
import classnames from "classnames";
import { Tree } from "antd";
import { MenuIcon, RadarIcon, TextIcon } from "@/images/index";
import { mainNav } from "@/common/global/nav.ts";
import { addTreeKey } from "@/common/utils/utils";
import "./index.scss";

const treeData = addTreeKey(mainNav);

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
          <MenuIcon />
        </i>
        <div className="menu-logo">
          <RadarIcon />
          <TextIcon className="desc" />
        </div>
        <div className="menu-tree">
          <Tree treeData={treeData}></Tree>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

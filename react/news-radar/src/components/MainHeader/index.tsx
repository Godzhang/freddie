import React, { FC } from "react";
import { Button } from "antd";
import SubMenu from "./SubMenu/index";
import { nav } from "@/common/global/nav.ts";
import "./index.scss";

const MainHeader: FC = (props) => {
  return (
    <div className="main-header">
      <div className="sub-menu">
        <SubMenu />
      </div>
      <div className="main-menu">
        <div className="menu-list">
          {nav.map((item) => (
            <a key={item.name}>{item.name}</a>
          ))}
        </div>
        <Button type="primary" shape="round">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default MainHeader;

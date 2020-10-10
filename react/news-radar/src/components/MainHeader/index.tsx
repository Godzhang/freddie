import React, { FC, useState } from "react";
import { Button } from "antd";
import SubMenu from "./SubMenu/index";
import SubScribeConfig from "../SubScribeConfig/index";
import { nav } from "@/common/global/nav.ts";
import "./index.scss";

const MainHeader: FC = (props) => {
  const [visible, setVisible] = useState(false);

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
        <Button type="primary" shape="round" onClick={() => setVisible(true)}>
          Subscribe
        </Button>
        <SubScribeConfig visible={visible} onClose={() => setVisible(false)} />
      </div>
    </div>
  );
};

export default MainHeader;

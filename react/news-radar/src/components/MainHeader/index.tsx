import React, { FC, useState } from "react";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu/index";
import SubScribeConfig from "../SubScribeConfig/index";
import { nav, mainNav } from "@/common/global/nav.ts";
import "./index.scss";

const { Search } = Input;

const MainHeader: FC = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="main-header">
      <div className="sub-menu-wrapper">
        <SubMenu />
      </div>
      <div className="main-menu">
        {/* <Search style={{ width: "200px" }} /> */}
        <div className="menu-list">
          <Link to="/">My Subscribe</Link>
          {mainNav.map((item) => (
            <Link to="/sub/1" key={item.title}>
              {item.title}
            </Link>
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

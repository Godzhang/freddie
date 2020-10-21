import React, { FC, useState, useEffect } from "react";
import { Button, Input } from "antd";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import SubMenu from "./SubMenu/index";
import SubScribeConfig from "../SubScribeConfig/index";
import { nav, mainNav } from "@/common/global/nav.ts";
import { saveSub } from "@/common/api/subscribe";
import "./index.scss";

const { Search } = Input;

interface MainHeaderProps extends RouteComponentProps {}

const MainHeader: FC<MainHeaderProps> = (props) => {
  const [visible, setVisible] = useState(false);
  const [selectIndex, setSelectIndex] = useState(-1);

  useEffect(() => {
    const { pathname } = props.location;
    if (pathname === "/") {
      setSelectIndex(-1);
    } else {
      const si = pathname.split("/").pop();
      setSelectIndex(Number(si));
    }
  }, [props]);

  const onSaveSubscribe = () => {
    // const params = {}
    // saveSub(params)
    setVisible(false);
  };

  return (
    <div className="main-header">
      <div className="sub-menu-wrapper">
        <SubMenu />
      </div>
      <div className="main-menu">
        {/* <Search style={{ width: "200px" }} /> */}
        <div className="menu-list">
          <Link className={selectIndex === -1 ? "selected" : ""} to="/">
            My Subscribe
          </Link>
          {mainNav.map((item, index) => (
            <Link
              className={selectIndex === index ? "selected" : ""}
              to={`/sub/${index}`}
              key={item.title}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <Button type="primary" shape="round" onClick={() => setVisible(true)}>
          Subscribe
        </Button>
        <SubScribeConfig visible={visible} onSave={() => onSaveSubscribe()} />
      </div>
    </div>
  );
};

export default withRouter(MainHeader);

import React, { FC, useState, useEffect } from "react";
import { Menu, Dropdown, Button } from "antd";
import { withRouter, RouteComponentProps } from "react-router";
import { CaretDownOutlined } from "@ant-design/icons";
import { subNav, SubNavStructure, SubNavList } from "@/common/global/nav";
import "./index.scss";

type PathName = "/" | "/sub/0" | "/sub/1" | "/sub/2";
type PN = keyof SubNavList;

const SubMenu: FC<RouteComponentProps> = (props) => {
  const { pathname } = props.location;
  const navList = subNav[pathname as PathName];
  const [showType, setShowType] = useState(navList[0].title);
  const [dropTypes, setDropTypes] = useState<SubNavStructure[]>(
    navList.slice(1)
  );
  const [subType, setSubType] = useState<SubNavStructure[]>([]);
  const [subTypeId, setSubTypeId] = useState(0);

  useEffect(() => {
    const { pathname } = props.location;
    const navList = subNav[pathname as PathName];
    setShowType(navList[0].title);
    setDropTypes(navList.slice(1));
  }, [props.location]);

  const changeType = (type: SubNavStructure) => {
    setShowType(type.title);
    setDropTypes(navList.filter((item) => item.title !== type.title));
    if (type.children) {
      setSubType(type.children);
    }
  };

  const menu = (
    <Menu>
      {dropTypes.map((item, index) => (
        <Menu.Item key={index} onClick={() => changeType(item)}>
          <span>{item.title}</span>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="sub-menu">
      <div className="type-select">
        <Dropdown overlay={menu} trigger={["click"]}>
          <a className="show">
            <span className="sd">{showType}</span>
            <CaretDownOutlined style={{ color: "#999" }} />
          </a>
        </Dropdown>
      </div>
      <div className="sub-type">
        {subType.map((type, index) => (
          <a
            className={["btn", index === subTypeId ? "selected" : ""].join(" ")}
            onClick={() => setSubTypeId(index)}
          >
            {type.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default withRouter(SubMenu);

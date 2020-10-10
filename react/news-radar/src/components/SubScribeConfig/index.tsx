import React, { FC, useState } from "react";
import { Drawer, Button, Dropdown, Menu } from "antd";
import { DrawerProps } from "antd/lib/drawer";
import { CheckOutlined, DownOutlined } from "@ant-design/icons";
import classnames from "classnames";
import "./index.scss";

const SubScribeConfig: FC<DrawerProps> = (props) => {
  const [selected, setSelected] = useState(false);

  const classes = classnames("status-btn", {
    selected,
  });

  function handleMenuClick() {
    console.log("click");
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );

  return (
    <Drawer
      className="subscribe-drawer"
      title="Subscribe"
      closable={true}
      width={580}
      {...props}
    >
      <Button
        shape="round"
        className={classes}
        onClick={() => setSelected(!selected)}
      >
        button
        {selected && <CheckOutlined />}
      </Button>
      <br />
      <br />
      <Dropdown overlay={menu}>
        <Button shape="round" className="status-btn">
          selected button
          <DownOutlined />
        </Button>
      </Dropdown>
    </Drawer>
  );
};

export default SubScribeConfig;

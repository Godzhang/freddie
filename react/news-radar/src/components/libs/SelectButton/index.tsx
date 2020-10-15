import React, { FC, ReactNode, useState, useEffect } from "react";
import classnames from "classnames";
import { Button, Dropdown, Menu } from "antd";
import { CheckOutlined, DownOutlined } from "@ant-design/icons";
import {
  SubItemStructure,
  SubStructure,
  SubScribeStructure,
} from "@/common/global/subscribeList";
import "./index.scss";

export type SelectButtonType = "single" | "multiple";
export interface SelectButtonProps {
  info: any;
  type?: SelectButtonType;
  children?: ReactNode;
  disabled?: boolean;
  update: () => void;
}

const SelectButton: FC<SelectButtonProps> = (props) => {
  const { type, info, disabled, children, update } = props;
  const [selected, setSelected] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(disabled);
  const [multipleText, setMultipleText] = useState(children);
  const classes = classnames("status-btn", {
    selected,
  });

  useEffect(() => {
    setBtnDisabled(info.disabled);
    if (info.disabled) {
      setSelected(false);
    }
  }, [info.disabled]);

  const checkChildrenDisabled = (
    sub: SubStructure | SubScribeStructure[],
    disabled: boolean
  ) => {
    //@ts-ignore
    sub.forEach((s) => {
      s.disabled = disabled;
      if (s.sub || s.children) {
        checkChildrenDisabled(s.sub || s.children, disabled);
      }
    });
  };

  const changeStatus = () => {
    if (info.disabled) return;
    setSelected(!selected);
    if (info.sub || info.children) {
      checkChildrenDisabled(info.sub || info.children, !selected);
      update();
    }
  };

  const selectItem = (item: SubItemStructure) => {
    setMultipleText(item.value);
  };

  const createOverlay = (sub: SubStructure) => {
    return (
      <Menu>
        {sub.map((s, si) => (
          <Menu.Item key={si} onClick={() => selectItem(s)}>
            {s.value}
          </Menu.Item>
        ))}
      </Menu>
    );
  };

  if (type === "single") {
    return (
      <Button
        className={classes}
        shape="round"
        disabled={btnDisabled}
        onClick={() => changeStatus()}
      >
        {children}
        {selected && <CheckOutlined />}
      </Button>
    );
  } else {
    return (
      <Dropdown disabled={btnDisabled} overlay={createOverlay(info.sub)}>
        <Button className={classes} shape="round">
          {multipleText}
          <DownOutlined />
        </Button>
      </Dropdown>
    );
  }
};

SelectButton.defaultProps = {
  type: "single",
  disabled: false,
};

export default SelectButton;

import React, { FC, ReactNode, useState, useEffect } from "react";
import classnames from "classnames";
import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import {
  SubStructure,
  SubScribeStructure,
} from "@/common/global/subscribeList";
import MultipleSelect, { ChangeFnType } from "./MultipleSelect/index";
import "./index.scss";

export type SelectButtonType = "single" | "multiple";
export interface SelectButtonProps {
  info: SubScribeStructure;
  type?: SelectButtonType;
  children?: ReactNode;
  disabled?: boolean;
  update: () => void;
}

const SelectButton: FC<SelectButtonProps> = (props) => {
  const { type, info, disabled, children, update } = props;
  const [selected, setSelected] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(disabled);
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
    sub: SubStructure | SubScribeStructure[] | undefined,
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
    info.selected = !selected;

    if (info.sub || info.children) {
      checkChildrenDisabled(info.sub || info.children, !selected);
    }
    update();
  };

  const changeChildrenKeys: ChangeFnType = (keys) => {
    const { sub } = info;
    //@ts-ignore
    sub.forEach((item) => {
      item.selected = keys.includes(item.value);
    });
    info.selected = keys.length !== 0;
  };

  if (type === "single") {
    return (
      <Button
        className={classes}
        shape="round"
        disabled={btnDisabled}
        size="small"
        onClick={() => changeStatus()}
      >
        {children}
        {selected && <CheckOutlined />}
      </Button>
    );
  } else {
    return (
      <MultipleSelect
        disabled={btnDisabled}
        options={info.sub!}
        onChange={(keys) => changeChildrenKeys(keys)}
      >
        {children}
      </MultipleSelect>
    );
  }
};

SelectButton.defaultProps = {
  type: "single",
  disabled: false,
};

export default SelectButton;

import React, { FC, ReactNode, useState, useEffect, useRef } from "react";
import classnames from "classnames";
import { Button } from "antd";
import { CheckOutlined, DownOutlined } from "@ant-design/icons";
import { SubItemStructure } from "@/common/global/subscribeList";
import useClickOutside from "@/hooks/useClickOutside";
import "./index.scss";

interface SelectProps {
  selected?: boolean;
}

export type OptionType = SubItemStructure & SelectProps;
export type ChangeFnType = (keys: string[]) => void;
export interface MultipleSelectProps {
  options: OptionType[];
  disabled?: boolean;
  children?: ReactNode;
  onChange?: ChangeFnType;
}

const clonedeep = (data: OptionType[]) => {
  return data.map((item) => ({ ...item }));
};

const MultipleSelect: FC<MultipleSelectProps> = (props) => {
  const { options, disabled, children, onChange } = props;
  const [btnSelected, setBtnSelected] = useState(false); // 按钮是否选中
  const [expanded, setExpanded] = useState(false); // 下拉框是否展开
  const [dir, setDir] = useState("down"); // 展开方向变量
  const [dropList, setDropList] = useState(clonedeep(options));
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const selectList = useRef<string[]>([]);
  const onSelectChange = onChange as ChangeFnType;

  const btnClasses = classnames("status-btn", {
    selected: btnSelected && !disabled,
  });
  const dropClasses = classnames("drop-container", {
    expanded,
    [`pos-${dir}`]: dir,
  });

  useEffect(() => {
    setDropList(clonedeep(options));
  }, [options]);

  // 如果有选中项，给按钮添加选中样式
  useEffect(() => {
    setBtnSelected(selectList.current.length > 0);
    onSelectChange(selectList.current);
  }, [dropList]);

  // 如果置为disabled，则重置
  useEffect(() => {
    if (disabled) {
      setBtnSelected(false);
      setDropList(clonedeep(options));
      selectList.current = [];
      onSelectChange([]);
    }
  }, [disabled]);

  // 计算下拉框位置
  useEffect(() => {
    const container = containerRef.current;
    const list = listRef.current;
    const documentHeight = document.body.offsetHeight;
    const containerToBottom = container!.getBoundingClientRect().bottom;
    const listHeight = list!.offsetHeight;

    if (listHeight > documentHeight - containerToBottom) {
      setDir("up");
    }
  }, [expanded]);

  useClickOutside(containerRef, () => {
    setExpanded(false);
  });

  const checkStatus = (index: number) => {
    const item = dropList[index];
    const isSelected = !!item.selected;
    item.selected = !isSelected;
    setDropList([...dropList]);
    // 如果选中
    if (!isSelected) {
      selectList.current.push(item.key);
    } else {
      const index = selectList.current.indexOf(item.key);
      selectList.current.splice(index, 1);
    }
  };

  return (
    <div className="mutiple-select" ref={containerRef}>
      <Button
        className={btnClasses}
        shape="round"
        disabled={disabled}
        onClick={() => setExpanded(!expanded)}
      >
        {children}
        <DownOutlined />
      </Button>
      <div className={dropClasses} ref={listRef}>
        <ul>
          {dropList.map((opt, optIndex) => (
            <li
              className={opt.selected ? "selected" : ""}
              key={opt.key}
              onClick={() => checkStatus(optIndex)}
            >
              {opt.value}
              <CheckOutlined className="select-icon" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultipleSelect;

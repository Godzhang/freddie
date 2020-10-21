import React, { FC, useState, useEffect, ReactText } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { Tree } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { MenuIcon, RadarIcon, TextIcon } from "@/images/index";
import { mainNav, NavStructure } from "@/common/global/nav.ts";
import { addTreeKey } from "@/common/utils/utils";
import { IStoreState, ConfigListStructure } from "@/types/redux";
import { fillConfigListToTreeData } from "./util";
import "./index.scss";
import { DataNode } from "antd/lib/tree";

interface SideBarProps {}

// treeData 对应的类型定义写的有些乱，用了太多类型断言，有时间需复盘

const SideBar: FC<SideBarProps & IStoreState> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [treeData, setTreeData] = useState<DataNode[]>(mainNav as DataNode[]);
  const [treeHeight, setTreeHeight] = useState(0);
  const [renderTree, setRenderTree] = useState(false);

  useEffect(() => {
    const { configList } = props;
    if (JSON.stringify(configList) !== "{}") {
      fillConfigListToTreeData(
        treeData as NavStructure[],
        configList as ConfigListStructure
      );
      const newData = addTreeKey(treeData as NavStructure[]);
      setTreeData(newData);
      setRenderTree(true);
    }
    setTreeHeight(document.body.clientHeight - 100);
  }, [props]);

  const sideBarClass = classnames("sidebar", {
    expanded: isExpanded,
  });

  const clickTreeNode = (keys: ReactText[]) => {
    console.log(keys);
  };

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
          {renderTree && (
            <Tree
              defaultExpandedKeys={["0", "1", "2"]}
              height={treeHeight}
              treeData={treeData}
              onSelect={(selectedKeys) => clickTreeNode(selectedKeys)}
            ></Tree>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IStoreState) => ({
  configList: state.configList,
});

export default connect(mapStateToProps, null)(SideBar);

import React, { FC, useState, useEffect, ReactText, useRef } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { Tree } from "antd";
import { DataNode, EventDataNode } from "antd/lib/tree";
import useClickOutside from "@/hooks/useClickOutside";
import { CaretDownOutlined } from "@ant-design/icons";
import { MenuIcon, RadarIcon, TextIcon } from "@/images/index";
import { mainNav, NavStructure } from "@/common/global/nav.ts";
import { addTreeKey } from "@/common/utils/utils";
import { IStoreState, ConfigListStructure } from "@/types/redux";
import { fillConfigListToTreeData } from "./util";
import { SubParams } from "@/common/api/list";
import emitter from "@/common/global/eventbus";
import "./index.scss";

interface SideBarProps {}
type SubTypeName = "topicType" | "locationType" | "sourceType";
type SubTypeIdsName = "topicIds" | "locationIds" | "sourceIds";
const typeIdMap: { [key: string]: SubTypeName } = {
  "0": "topicType",
  "1": "locationType",
  "2": "sourceType",
};
const subTypeIdsNameMap: { [key: string]: SubTypeIdsName } = {
  "0": "topicIds",
  "1": "locationIds",
  "2": "sourceIds",
};

// treeData 对应的类型定义写的有些乱，用了太多类型断言，有时间需复盘

const SideBar: FC<SideBarProps & IStoreState> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
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

  useClickOutside(containerRef, () => {
    setIsExpanded(false);
  });

  const sideBarClass = classnames("sidebar", {
    expanded: isExpanded,
  });

  const getArticleParams = (
    node: EventDataNode,
    subPathId: number,
    typeId?: number,
    subTypeId?: number,
    sourceIndex?: number
  ): SubParams => {
    const params: SubParams = { subPathId, subType: 0 };
    if (typeof typeId !== "undefined") {
      params[typeIdMap[typeId]] = 1;
    } else {
      return params;
    }

    if (typeof subTypeId !== "undefined") {
      params[subTypeIdsNameMap[typeId]] = `${subTypeId}`;
    } else {
      return params;
    }

    if (typeof sourceIndex !== "undefined") {
      params.sourceInfos = `${node.title}`;
    }

    return params;
  };

  const clickTreeNode = (node: EventDataNode) => {
    const selkeys = (node.key as string).split("-").map((item) => Number(item));
    //@ts-ignore
    const params = getArticleParams(node, ...selkeys);
    emitter.emit("request-change", params);
  };

  return (
    <div className="s-container" ref={containerRef}>
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
              onSelect={(selectedKeys, e) => clickTreeNode(e.node)}
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

import React from "react";
import { Input, InputNumber } from "antd";
import Switch from "../../../common/libs/Switch";

export default {
  isShowTitle: {
    label: "显示标题区域",
    value: true,
    component: (
      <Switch
        default={true}
        itemKey="isShowTitle"
        config="textConfig"
        action="setChartTitleDisplay"
      />
    ),
  },
  title: {
    label: "图表标题",
    value: "标题",
    component: <Input defaultValue="标题" />,
  },
  titleSize: {
    label: "图表标题字号",
    value: 36,
    component: <InputNumber min={1} max={10} defaultValue={36} />,
  },
  isShowSource: {
    label: "显示数据来源",
    value: true,
    component: (
      <Switch
        default={true}
        itemKey="isShowSource"
        config="textConfig"
        action="setSourceDisplay"
      />
    ),
  },
  source: {
    label: "数据来源",
    value: "数据来源：国家统计局",
    component: <Input defaultValue="数据来源：国家统计局" />,
  },
  sourceSize: {
    label: "数据来源字号",
    value: 36,
    component: <InputNumber min={1} max={10} defaultValue={36} />,
  },
};

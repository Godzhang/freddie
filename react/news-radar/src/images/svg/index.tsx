import React, { FC, CSSProperties } from "react";
import Icon from "@ant-design/icons";
import MenuSvg from "./menu";

interface IconProps {
  style?: CSSProperties;
}

export const MenuIcon: FC<IconProps> = (props) => (
  <Icon component={MenuSvg} {...props} />
);

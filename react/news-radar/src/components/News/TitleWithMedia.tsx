import React, { FC } from "react";
import BaseNewsStructure from "./base";

const TitleWithMedia: FC = (props) => {
  return <BaseNewsStructure showMedia={true} titleSize="large" />;
};

export default TitleWithMedia;

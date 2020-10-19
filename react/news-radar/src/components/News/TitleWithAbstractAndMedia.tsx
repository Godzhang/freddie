import React, { FC } from "react";
import BaseNewsStructure from "./base";

const TitleWithAbstractAndMedia: FC = (props) => {
  return (
    <BaseNewsStructure showAbstract={true} showMedia={true} mediaPos="top" />
  );
};

export default TitleWithAbstractAndMedia;

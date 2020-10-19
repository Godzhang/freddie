import React, { FC } from "react";
import BaseNewsStructure from "./base";

const TitleWithAbstract: FC = (props) => {
  return <BaseNewsStructure showAbstract={true} />;
};

export default TitleWithAbstract;

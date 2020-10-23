// import TitleOnly from "./TitleOnly";
// import TitleWithAbstract from "./TitleWithAbstract";
// import TitleWithAbstractAndMedia from "./TitleWithAbstractAndMedia";
// import TitleWithMedia from "./TitleWithMedia";

// export {
//   TitleOnly,
//   TitleWithAbstract,
//   TitleWithAbstractAndMedia,
//   TitleWithMedia,
// };
import React, { FC } from "react";
import BaseNewsStructure, { NewsStructure } from "./base";

export interface NewsComponentsProps {
  info: NewsStructure;
}

export const TitleOnly: FC<NewsComponentsProps> = (props) => {
  return <BaseNewsStructure titleSize="large" newsContent={props.info} />;
};

export const TitleWithAbstract: FC<NewsComponentsProps> = (props) => {
  return <BaseNewsStructure showAbstract={true} newsContent={props.info} />;
};

export const TitleWithAbstractAndMedia: FC<NewsComponentsProps> = (props) => {
  return (
    <BaseNewsStructure
      showAbstract={true}
      showMedia={true}
      mediaPos="top"
      newsContent={props.info}
    />
  );
};

export const TitleWithMedia: FC<NewsComponentsProps> = (props) => {
  return (
    <BaseNewsStructure
      showMedia={true}
      titleSize="large"
      newsContent={props.info}
    />
  );
};

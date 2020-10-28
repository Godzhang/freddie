import React, { ReactElement } from "react";
import {
  TitleOnly,
  TitleWithAbstract,
  TitleWithAbstractAndMedia,
  TitleWithMedia,
} from "@/components/News/index.tsx";
import BaseNewsStructure, { NewsStructure } from "@/components/News/base";

export const renderNewsComponent = (articleDeital: NewsStructure) => {
  const { sourceId } = articleDeital;
  let cmp!: ReactElement;
  if (sourceId === 0) {
    if (articleDeital.pictures) {
      return <TitleWithAbstractAndMedia info={articleDeital} />;
    } else {
      return <TitleWithAbstract info={articleDeital} />;
    }
  } else {
    if (articleDeital.pictures) {
      cmp = <TitleWithMedia info={articleDeital} />;
    } else {
      cmp = <TitleOnly info={articleDeital} />;
    }
  }
  return cmp;
};

export const calcPageItems = (articleList: NewsStructure[]) => {
  const pages = [
    { 0: [], 1: [], 2: [] },
    { 0: [], 1: [], 2: [] },
    { 0: [], 1: [], 2: [] },
  ];
  // console.log(articleList);
  const firstNews = renderNewsComponent(articleList[0]);
};

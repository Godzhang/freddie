import React, { FC } from "react";
import WordCloudCreator from "./Creator/index";
import "./index.scss";

export type ColorsType = string[][][];

export interface WordCloudProps {
  words: string[];
}

const WordCloud: FC = (props) => {
  // return <WordCloudCreator {...props} />;
  return <div></div>;
};

export const LatestNewsWordCloud: FC<WordCloudProps> = (props) => {
  const c1 = ["#44c9ff", "#79e6ff"];
  const c2 = ["#2be0be", "#56f2e0"];
  const c3 = ["#6f86f2", "#92d7fe"];
  const colors: ColorsType = [
    [c1, c2, c1],
    [c3, c2],
    [c1, c3, c2],
    [c2, c1],
    [c3, c2, c1],
  ];
  return <WordCloudCreator colors={colors} {...props} />;
};

export const HotNewsWordCloud: FC<WordCloudProps> = (props) => {
  const c1 = ["#ffa75c", "#ffd395"];
  const c2 = ["#ff5c5c", "#ff95aa"];
  const c3 = ["#ce77d7", "#e9afed"];
  const colors: ColorsType = [
    [c1, c2, c1],
    [c2, c1],
    [c1, c3, c2],
    [c3, c2],
    [c2, c3, c1],
  ];
  return <WordCloudCreator colors={colors} {...props} />;
};

export const TrendingWordCloud: FC<WordCloudProps> = (props) => {
  const c1 = ["#67d685", "#9ff7d9"];
  const c2 = ["#2be0be", "#56f2f0"];
  const c3 = ["#8ce359", "#c0f392"];
  const colors: ColorsType = [
    [c1, c2, c3],
    [c1, c2],
    [c1, c3, c2],
    [c2, c1],
    [c3, c2, c3],
  ];
  return <WordCloudCreator colors={colors} {...props} />;
};

export default WordCloud;

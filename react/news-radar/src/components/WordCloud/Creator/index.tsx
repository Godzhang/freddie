import React, { FC } from "react";
import WordTag from "../Tag/index";
import { ColorsType } from "../index";
import "./index.scss";

export interface WordCloudProps {
  colors: ColorsType;
  words: string[];
}

const WordCloudCreator: FC<WordCloudProps> = (props) => {
  const { colors, words } = props;
  let i = 0;

  return (
    <ul className="word-cloud">
      {colors.map((cs, csIndex) => {
        if (cs.length === 3) {
          return (
            <li className="row" key={csIndex}>
              {cs.map((c, cIndex) => (
                <WordTag colors={c} key={cIndex}>
                  {words[i++]}
                </WordTag>
              ))}
            </li>
          );
        } else {
          return (
            <li className="row" key={csIndex}>
              <WordTag blank></WordTag>
              {cs.map((c, cIndex) => (
                <WordTag colors={c} key={cIndex}>
                  {words[i++]}
                </WordTag>
              ))}
              <WordTag blank></WordTag>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default WordCloudCreator;

import React, { FC } from "react";
import classnames from "classnames";
import "./index.scss";

interface WordTagProps {
  children?: React.ReactNode;
  colors?: string[];
  blank?: boolean;
}

const WordTag: FC<WordTagProps> = (props) => {
  const { blank, colors, children } = props;
  const tagClass = classnames("word-tag", {
    "is-blank": blank,
  });
  const bgStyle = {
    background: `linear-gradient(to right, ${colors![0]}, ${colors![1]})`,
  };
  return (
    <span className={tagClass} style={blank ? undefined : bgStyle}>
      <i>{blank ? "" : children}</i>
    </span>
  );
};

WordTag.defaultProps = {
  blank: false,
  colors: ["#44c9ff", "#79e6ff"],
};

export default WordTag;

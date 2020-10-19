import React, { FC, useState } from "react";
import classnames from "classnames";
import NewsDetail from "../NewsDetail/index";
import "./base.scss";

export interface NewsStructure {
  id: string;
  website_name: string;
  fromInfo: string;
  pictures?: string;
  author: string;
  title: string;
  _abstract: string;
  keywords: string;
  pubtime: string;
  publishTime: string;
  uuid: string;
}

type TitleSize = "normal" | "large";
type MediaPos = "top" | "bottom";
interface BaseNewsProps {
  showTitle?: boolean;
  titleSize?: TitleSize;
  showMedia?: boolean;
  mediaPos?: MediaPos;
  showAbstract?: boolean;
  newsContent?: NewsStructure;
}

const BaseNewsStructure: FC<BaseNewsProps> = (props) => {
  const { titleSize, showMedia, mediaPos, showAbstract } = props;
  const [visible, setVisible] = useState(false);
  const titleClasses = classnames("item", "title", {
    large: titleSize === "large",
  });

  return (
    <div className="news">
      <div className="item organ">
        <i className="logo"></i>
        <span>China long</span>
      </div>
      {showMedia && mediaPos === "top" && (
        <div className="item media">
          <img
            src="https://cdn.pixabay.com/photo/2020/09/30/12/18/books-5615562_960_720.jpg"
            alt=""
          />
        </div>
      )}
      <div className="item country">
        <span>
          <i>United States</i>
        </span>
      </div>
      <h3 className={titleClasses} onClick={() => setVisible(true)}>
        Lucy Bronze: Manchester City re-sign England right-back from Lyon
      </h3>
      {showMedia && mediaPos === "bottom" && (
        <div className="item media">
          <img
            src="https://cdn.pixabay.com/photo/2020/09/30/12/18/books-5615562_960_720.jpg"
            alt=""
          />
        </div>
      )}
      {showAbstract && (
        <div className="item abstract">
          I am a
          wordddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </div>
      )}
      <div className="item time">
        <span>2020-09-10 12:34:33</span>
      </div>
      <NewsDetail
        visible={true}
        uuid="7707811473141092580"
        onClose={() => setVisible(false)}
      />
    </div>
  );
};

BaseNewsStructure.defaultProps = {
  showTitle: true,
  titleSize: "normal",
  showMedia: false,
  mediaPos: "bottom",
  showAbstract: false,
};

export default BaseNewsStructure;

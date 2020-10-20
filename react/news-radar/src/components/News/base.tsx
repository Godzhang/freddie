import React, { FC, useState, useEffect } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import NewsDetail from "../NewsDetail/index";
import {
  IStoreState,
  ConfigListStructure,
  LocationMapStructure,
} from "@/types/redux";
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

const BaseNewsStructure: FC<BaseNewsProps & IStoreState> = (props) => {
  const { titleSize, showMedia, mediaPos, showAbstract } = props;
  const [visible, setVisible] = useState(false);
  const [locationMap, setLocationMap] = useState<LocationMapStructure | null>(
    null
  );
  const titleClasses = classnames("item", "title", {
    large: titleSize === "large",
  });

  useEffect(() => {
    const { configList } = props;
    if (JSON.stringify(configList) !== "{}") {
      const { locationMap } = configList as ConfigListStructure;
      setLocationMap(locationMap);
    }
  }, [props]);

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
      {locationMap && (
        <div className="item country">
          <span>
            {/* <i>United States</i> */}
            <i>{locationMap[1]}</i>
          </span>
        </div>
      )}
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
        visible={visible}
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

const mapStateToProps = (state: IStoreState) => ({
  configList: state.configList,
});

export default connect(mapStateToProps, null)(BaseNewsStructure);

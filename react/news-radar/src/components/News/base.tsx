import React, { FC, useState, useEffect } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import NewsDetail from "../NewsDetail/index";
import {
  IStoreState,
  ConfigListStructure,
  LocationMapStructure,
} from "@/types/redux";
import {
  FacebookIcon,
  HotIcon,
  TrendIcon,
  TwitterIcon,
  NewsIcon,
} from "@/images";
import "./base.scss";

type SourceId = 0 | 1 | 2;
export interface NewsStructure {
  id: string;
  sourceId: SourceId;
  locationId: number;
  topicId: number;
  website_name: string;
  fromInfo: string;
  pictures: string;
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
  newsContent: NewsStructure;
}

const sourceIconMap = {
  0: <NewsIcon />,
  1: <TwitterIcon />,
  2: <FacebookIcon />,
};

const webSiteMap = {
  1: "Twitter",
  2: "Facebook",
};

const BaseNewsStructure: FC<BaseNewsProps & IStoreState> = (props) => {
  const { titleSize, showMedia, mediaPos, showAbstract, newsContent } = props;
  const {
    sourceId,
    title,
    website_name,
    locationId,
    pictures,
    pubtime,
    _abstract,
  } = newsContent;
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

  const isShowTopPic = showMedia && mediaPos === "top" && pictures;
  const isShowBottomPic = showMedia && mediaPos === "bottom" && pictures;

  return (
    <div className="news">
      <div className="item organ">
        <i className="logo">
          {sourceId === null ? sourceIconMap[0] : sourceIconMap[sourceId]}
        </i>
        <span>
          {sourceId === 0 ? website_name : webSiteMap[sourceId as 1 | 2]}
        </span>
      </div>
      {isShowTopPic && (
        <div className="item media">
          <img src={pictures.split("#").shift()} alt="" />
        </div>
      )}
      {locationMap && (
        <div className="item country">
          <span>
            <i>{locationMap[locationId || 0]}</i>
          </span>
        </div>
      )}
      <h3 className={titleClasses} onClick={() => setVisible(true)}>
        {title}
      </h3>
      {isShowBottomPic && (
        <div className="item media">
          <img src={pictures.split("#").shift()} alt="" />
        </div>
      )}
      {showAbstract && <div className="item abstract">{_abstract}</div>}
      <div className="item time">
        <span>{pubtime}</span>
      </div>
      {/* ?? NewsDetail全局应该只有一个 ??  */}
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

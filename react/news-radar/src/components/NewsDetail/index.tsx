import React, { FC, useEffect, useState } from "react";
import { Drawer, Skeleton } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { DrawerProps } from "antd/lib/drawer";
import { formatterContent, getTimeDesc } from "@/common/utils/utils";
import { getArticleInfo } from "@/common/api/info";
import { NewsStructure } from "../News/base";
import {
  IStoreState,
  ConfigListStructure,
  LocationMapStructure,
} from "@/types/redux";
import "./index.scss";

interface NewsDetailStructure extends NewsStructure {
  content: string;
  region: number;
}

interface DetailProps extends DrawerProps {
  uuid: string;
}

const NewsDetail: FC<DetailProps & IStoreState> = (props) => {
  const { uuid, visible } = props;
  const [articleDetail, setArticleDetail] = useState<NewsDetailStructure>(
    {} as NewsDetailStructure
  );
  const [locationMap, setLocationMap] = useState<LocationMapStructure | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (visible && JSON.stringify(articleDetail) === "{}") {
      getArticleInfo({ id: uuid }).then((res) => {
        const article = res.data.result;
        setArticleDetail(article);
      });
    }
  }, [visible]);

  useEffect(() => {
    const { configList } = props;
    if (JSON.stringify(configList) !== "{}") {
      const { locationMap } = configList as ConfigListStructure;
      setLocationMap(locationMap);
    }
  }, [props]);

  useEffect(() => {
    if (JSON.stringify(articleDetail) !== "{}") {
      setLoading(false);
    }
  }, [articleDetail]);

  const paragraphs = formatterContent(articleDetail.content);

  return (
    <Drawer
      className="news-detail"
      title=""
      closable={true}
      width={980}
      {...props}
    >
      {loading ? (
        <>
          <Skeleton active paragraph={{ rows: 5 }} />
        </>
      ) : (
        <div className="detail">
          <h3 className="title">{articleDetail.title}</h3>
          <div className="note">
            <div className="info">
              {articleDetail.pubtime && (
                <div className="time">
                  <ClockCircleOutlined />
                  <span className="desc">
                    {getTimeDesc(articleDetail.pubtime)}
                  </span>
                </div>
              )}
              <div className="country">
                {locationMap && (
                  <span>
                    <i>{locationMap[articleDetail.region]}</i>
                  </span>
                )}
              </div>
            </div>
            <div className="attitude">
              <span className="view">Positive</span>
              <div className="bar">
                <span className="positive" style={{ width: "70%" }}>
                  <i>70%</i>
                </span>
                <span className="negative" style={{ width: "30%" }}>
                  <i>30%</i>
                </span>
              </div>
              <span className="view">Negative</span>
            </div>
          </div>
          <div className="media">
            <img
              src="https://cdn.pixabay.com/photo/2020/09/30/12/18/books-5615562_960_720.jpg"
              alt=""
            />
          </div>
          <div className="content">
            {paragraphs.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </div>
        </div>
      )}
    </Drawer>
  );
};

const mapStateToProps = (state: IStoreState) => ({
  configList: state.configList,
});

export default connect(mapStateToProps, null)(NewsDetail);

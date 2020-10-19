import React, { FC, useEffect, useState } from "react";
import { Drawer } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { DrawerProps } from "antd/lib/drawer";
import { formatterContent, getTimeDesc } from "@/common/utils/utils";
import { getArticleInfo } from "@/common/api/info";
import { NewsStructure } from "../News/base";
import "./index.scss";

interface NewsDetailStructure extends NewsStructure {
  content: string;
}

interface DetailProps extends DrawerProps {
  uuid: string;
}

const NewsDetail: FC<DetailProps> = (props) => {
  const { uuid, visible } = props;
  const [articleDetail, setArticleDetail] = useState<NewsDetailStructure>(
    {} as NewsDetailStructure
  );

  // useEffect(() => {
  //   if (visible && !articleDetail) {
  //     getArticleInfo({ id: uuid }).then((res) => {
  //       const article = res.data.result;
  //       setArticleDetail(article);
  //     });
  //   }
  // }, [visible]);
  useEffect(() => {
    getArticleInfo({ id: uuid }).then((res) => {
      const article = res.data.result;
      setArticleDetail(article);
    });
  }, []);

  const paragraphs = formatterContent(articleDetail.content);

  return (
    <Drawer
      className="news-detail"
      title=""
      closable={true}
      width={980}
      {...props}
    >
      <div className="detail">
        <h3 className="title">{articleDetail.title}</h3>
        <div className="note">
          <div className="info">
            {articleDetail.pubtime && (
              <div className="time">
                <ClockCircleOutlined />
                <span className="desc">16 minutes age</span>
                <span className="desc">
                  {getTimeDesc(articleDetail.pubtime)}
                </span>
              </div>
            )}
            <div className="country">
              <span>
                <i>{articleDetail.author}</i>
              </span>
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
        {/* <hr /> */}
        <div className="relevant">
          <h5></h5>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </Drawer>
  );
};

export default NewsDetail;

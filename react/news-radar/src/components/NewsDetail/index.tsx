import React, { FC } from "react";
import { Drawer } from "antd";
import { DrawerProps } from "antd/lib/drawer";
import "./index.scss";

const NewsDetail: FC<DrawerProps> = (props) => {
  return (
    <Drawer
      className="news-detail"
      title=""
      closable={true}
      width={980}
      {...props}
    >
      <div className="detail">
        <h3 className="title"></h3>
        <div className="note"></div>
        <div className="media"></div>
        <div className="content"></div>
        <hr />
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

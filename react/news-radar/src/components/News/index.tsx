import React, { FC, useState } from "react";
import NewsDetail from "../NewsDetail/index";
import "./index.scss";

const News: FC = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="news">
      <div className="item organ">
        <i className="logo"></i>
        <span>China long</span>
      </div>
      <div className="item media"></div>
      <div className="item country">
        <span>
          <i>United States</i>
        </span>
      </div>
      <div className="item title" onClick={() => setVisible(true)}>
        Lucy Bronze: Manchester City re-sign England right-back from Lyon
      </div>
      <div className="item content">
        I am a
        wordddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
      </div>
      {/* <div className="item content">
        Women's Super League side Manchester City have re-signed England
        right-back Lucy Bronze from European champions Lyon on a two-year
        contract.Women's Super League side Manchester City have{" "}
      </div> */}
      <div className="item time">
        <span>2020-09-10 12:34:33</span>
      </div>
      <NewsDetail visible={visible} onClose={() => setVisible(false)} />
    </div>
  );
};

export default News;

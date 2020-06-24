import React from "react";
import { Link } from "react-router-dom";
import "./Home.less";

const imgs = {
  logo: require("../../images/home/logo.png"),
};

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="logo">
          <img src={imgs.logo} alt="logo" />
        </div>
        <div className="main">
          <div className="title">
            <div className="name">图图</div>
            <div className="slogan">你的数据 我来解决</div>
          </div>
          <div className="tips">
            <div className="use">如何使用</div>
            <div className="tip">
              1.选择图表：按分类、按场景各种款式各种花色任你选择
            </div>
            <div className="tip">
              2.上传数据：EXCEL、TXT、DOC 想传什么传什么
            </div>
            <div className="tip">
              3.一键导出：白底红底蓝底绿底透明底，GIF、MP4、JPG、PNG通通能导
            </div>
          </div>
          <div className="start">
            <Link className="btn" to="/templates">
              开始
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

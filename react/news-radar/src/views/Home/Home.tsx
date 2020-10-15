import React, { FC } from "react";
import { Layout, Row, Col } from "antd";
import SideBar from "@/components/SideBar/index";
import MainHeader from "@/components/MainHeader/index";
import MainContent from "@/components/MainContent/index";
import { getSubList, getConfigList } from "@/common/api/subscribe";
// import { getSubList, getConfigList } from "@/common/api/list";
// import { getSubList, getConfigList } from "@/common/api/info";
import "./Home.scss";

const { Content, Header } = Layout;

const Home: FC = () => {
  // getSubList().then((res) => {
  //   console.log(res);
  // });
  // getConfigList().then((res) => {
  //   console.log(res);
  // });
  return (
    <div className="home-page">
      <SideBar />
      <div className="main">
        <Layout className="layout">
          <Header className="header">
            <MainHeader />
          </Header>
          <Content className="content">
            <MainContent />
          </Content>
        </Layout>
      </div>
    </div>
  );
};

export default Home;

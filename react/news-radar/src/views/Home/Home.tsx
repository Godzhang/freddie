import React, { FC } from "react";
import { Layout, Row, Col } from "antd";
// import useMount from "@/hooks/useMount";
import SideBar from "@/components/SideBar/index";
import MainHeader from "@/components/MainHeader/index";
import MainContent from "@/components/MainContent/index";
import "./Home.scss";

const { Content, Header } = Layout;

const Home: FC = (props) => {
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

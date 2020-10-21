import React, { FC, useEffect } from "react";
import { Layout } from "antd";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
// import { RouteComponentProps } from "react-router-dom";
import configAction from "@/redux/actions/config-list/action";
import SideBar from "@/components/SideBar/index";
import MainHeader from "@/components/MainHeader/index";
import MainContent from "@/components/MainContent/index";
import { getSubList, getConfigList } from "@/common/api/subscribe";

import "./Home.scss";

const { Content, Header } = Layout;

interface HomeProps {
  actions: {
    updateConfigList: Function;
  };
}

const Home: FC<HomeProps> = (props) => {
  useEffect(() => {
    getConfigList().then((res) => {
      const configList = res.data.result;
      props.actions.updateConfigList(configList);
    });
  }, []);
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(configAction, dispatch),
});

export default connect(null, mapDispatchToProps)(Home);

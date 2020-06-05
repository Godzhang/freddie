import React from "react";
import ReactDOM from "react-dom";
import "./global.scss";
import "antd/dist/antd.min.css";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import IndexRouter from "./routes/index";
import "./common/utils/http";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <IndexRouter />
    </Provider>
  </ConfigProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

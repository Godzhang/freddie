import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Home from "@/views/Home/Home";

class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/sub/:id" component={Home}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default Router;

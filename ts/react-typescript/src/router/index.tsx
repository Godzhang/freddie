import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "../views/home/index";

export default class RouteConfig extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
    );
  }
}
